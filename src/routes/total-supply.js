const synthetixJs = require('../utils/snxJS-connector');

const getTotalSupply = async (req, res) => {
  const {
    snxJS: { Synthetix },
  } = synthetixJs;
  try {
    const totalSupply = await Synthetix.totalSupply();
    res.send({ totalSupply: totalSupply / 1e18 });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = getTotalSupply;
