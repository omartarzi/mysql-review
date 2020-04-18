const dbHelper = require('../database/dbHelper.js');

module.exports = {
  getStuff: (req, res) => {
    dbHelper.get((err, result) => {
      if (err) {
        res.status(404)
        console.log(err);
      } else {
        res.status(200);
        res.json(result);
      }
    })
  },

  postStuff: (req, res) => {
    dbHelper.post(req, (err, result) => {
      if (err) {
        res.status(404)
        console.log(err);
      } else {
        res.status(200);
        res.json(result);
      }
    })
  }
}
