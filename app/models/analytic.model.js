//current in work

const sql = require("./db.js");

// constructor
const Analytic = function(analytic) {
  this.Header = analytic.Header
};


Analytic.countAll = (tableName, result) => {
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


Analytic.rationAd = (result) => {
  sql.query(`select ((SELECT COUNT(*)FROM ad WHERE Negotiable = true)/( SELECT COUNT(*)fROM ad)) AS AdNegotaible,
  ((SELECT COUNT(*)FROM ad WHERE Negotiable = false)/( SELECT COUNT(*)fROM ad)) AS AdNoNegotaible;`, (err, res) => {
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