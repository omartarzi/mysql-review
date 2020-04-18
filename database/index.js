const mysql = require('mysql');

// TODO: establish connection

var db = mysql.createConnection ({
  user: "root",
  password: "",
  database: 'alcohol'
});

db.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Connected!');
  }
});


module.exports = db;