const db = require('./');

const dbHelper = {
  get: callback => {
      db.query('SELECT * FROM drinks', (err, result) => {
      //   if (err) {
      //     callback(err)
      //   } else {
      //     callback(null, result);
      //   }
        callback(err, result);
      })
  },
  post: (req, callback) => {
    db.query(`INSERT INTO drinks (drink, alcContent) VALUES ('${req.body.drink}', ${req.body.alcContent});`, (err, result) => {
      callback(err, result);
    });
  }
}

module.exports = dbHelper;