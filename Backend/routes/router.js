const express = require('express');
const router = express.Router();
const {register, logIn, logOut, getProfile} = require('../controllers/auth.js')


router.post('/register', register);
router.post('/login', logIn);
router.get('/profile', getProfile)
router.delete('/logout', logOut);

module.exports = router;