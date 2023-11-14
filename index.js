const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
dotEnv.config();
const app = express();
const db = require('./config/database');