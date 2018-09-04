var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sitedev.ipxon.net",
  user: "tesis",
  password: "tesis.2018",
  database: "tesis"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM Guille", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });