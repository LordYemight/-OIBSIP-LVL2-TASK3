const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || username.length < 4) {
            return res.json({
                error: 'username is required and it should be at least 4 characters long'
            })
        }

        // check if username is already used 
        const existingUsername = await User.findOne({ username })
        if (existingUsername) {
            return res.json({
                error: 'username already picked, choose another'
            })
        }

        if (!password || !password.match(/^(?=.*[A-Z])[A-Za-z0-9]{6,}$/)) {
            return res.json({
                error: 'Password is required. It must contain at least 6 alphanumeric characters, with an uppercase letter.'
            });
        }

        if (!email) {
            return res.json({
                error: 'email is required'
            })
        }
        // check if email is already used 
        const existEmail = await User.findOne({ email })
        if (existEmail) {
            return res.json({
                error: 'email is already registered'
            })
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);


        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })
        return res.json(user)
    } catch (error) {
        console.log('Registration failed:', error)
        res.status(500).json({ error: ' An error occurred during registration' });
    }
}

const logIn = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username) {
            return res.json({
                error: 'Input your username'
            })
        }

        // find the user by username from the database
        const user = await User.findOne({ username });

        // Check if the user exists
        if (!user) {
            // return res.status(401).json({ error: 'User does not exist.' });
            return res.json({ error: 'User does not exist.' }).status(401);

        }

        // Compare the provided password with the stored password hash
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            // return res.status(401).json({ error: 'Incorrect password' });
            return res.json({ error: 'Incorrect password' }).status(401)
        }


        if (isPasswordValid) {
            jwt.sign({ username, id: user._id }, process.env.SECRET_KEY, {}, (err, token) => {
                if (err) throw err
                res.cookie('token', token).json({
                    id: user._id,
                    username,
                });
            })
        }
        else {
            // return res.status(400).json({error: 'wrong credentials'});
            return res.json({ error: 'wrong credentials' }).status(400);
        }

    }


    catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal server error' });

    }
}

const getProfile = (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, {}, (err, user) => {
            if (err) throw err;
            res.json(user)
        })
    } else {
        res.json(null);
    }
}


const logOut = (req, res) => {
    // Clear the token cookie by setting it to an empty value and setting an expiration date in the past
    res.clearCookie('token');

    res.json({ message: 'Logged out successfully' });
};
module.exports = { register, logIn, logOut, getProfile }