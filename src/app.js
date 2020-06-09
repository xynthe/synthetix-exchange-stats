const express = require('express');
const snxJSConnector = require('./utils/snxJS-connector');
const dotenv = require('dotenv');
// import bodyParser from 'body-parser';
// import cors from 'cors';

dotenv.config();
snxJSConnector.init();

const router = require('./routes');

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/api/address-data', bodyParser.json());
// app.use(cors({ origin: true, credentials: true }));
app.use(router);
app.listen(9000, () => console.log('Server running'));
