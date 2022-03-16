const cors = require('cors');
const express = require('express');
let bodyParser = require('body-parser');
const advertRoute = require('./routes/advert');
const authRoute = require('./routes/auth');
var cookieParser = require('cookie-parser')

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({origin: true, credentials: true }));



app.use('/adverts', advertRoute);
app.use('/auth', authRoute);

const PORT = process.env.PORT || 3001
app.listen(PORT , ()=> console.log('server is running on port '+ PORT));
