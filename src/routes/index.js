const express = require('express');

const getTotalSupply = require('./total-supply');
const getPairs = require('./pairs');

const router = express.Router();

router.get('/alive', (req, res) => {
  res.send('API is live');
});

router.get('/api/total-supply', getTotalSupply);

router.get('/api/pairs/:category', getPairs);

module.exports = router;
