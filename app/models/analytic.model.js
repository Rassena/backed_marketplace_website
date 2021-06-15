//current in work

const sql = require("./db.js");

// constructor
const Analytic = function(analytic) {
  this.Header = analytic.Header
};


Analytic.count = (tableName, result) => {
  sql.query(`SELECT COUNT(*) AS NumberOf${tableName} FROM ${tableName};`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("count: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Ad with the id
    result({ kind: "not_found" }, null);
  });
};



module.exports = Analytic;