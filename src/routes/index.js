const express = require('express');

const getTotalSupply = require('./total-supply');
const getPairs = require('./pairs');
const getTransactions = require('./transactions');
const getTicker = require('./ticker');

const router = express.Router();

router.get('/alive', (req, res) => {
  res.send('API is live');
});

router.get('/api/total-supply', getTotalSupply);
router.get('/api/pairs/:category', getPairs);
router.get('/api/transactions/:pair', getTransactions);
router.get('/api/ticker/:pair', getTicker);

module.exports = router;
