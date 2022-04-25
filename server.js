const cors = require('cors');
const express = require('express');
let bodyParser = require('body-parser');
const advertRoute = require('./routes/advert');
const authRoute = require('./routes/auth');
const jobsRoute = require('./routes/jobs');
var cookieParser = require('cookie-parser')
const mangoos = require('mongoose')

const app = express();
app.use(express.static('public'));
app.use(express.static('images'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({origin: true, credentials: true }));


app.use('/auth', authRoute);
app.use('/jobs', jobsRoute);
app.use('/adverts', advertRoute);

const PORT = process.env.PORT || 3001
app.listen(PORT , ()=> console.log('server is running on port '+ PORT));
