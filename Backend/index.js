const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors');
const { Mongoose } = require('./db/db');
const router = require('./routes/router');
const port = process.env.port
const app = express();
const cookieParser = require('cookie-parser');



app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use('/', router);


app.listen(port, async ()=> {
    await Mongoose
    console.log(`server is listening on port ${port}`)
})

