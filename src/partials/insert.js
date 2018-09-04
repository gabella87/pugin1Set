var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sitedev.ipxon.net",
  user: "tesis",
  password: "tesis.2018",
  database: "tesis"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO Guille (date, usage_idle) VALUES ('2018-09-03 22:22:22.000000',1234567)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});