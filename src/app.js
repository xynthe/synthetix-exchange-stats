const express = require('express');
require('dotenv').config();
const snxJSConnector = require('./utils/snxJS-connector');

snxJSConnector.init();

const router = require('./routes');

const app = express();
app.use(router);
app.listen(9000, () => console.log('Server running'));
