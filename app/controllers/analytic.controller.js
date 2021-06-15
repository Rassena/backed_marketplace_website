const Analytic = require("../models/analytic.model.js");

// Find amount of row in tableName
exports.count = (req, res) => {
  Analytic.count(req.params.tableName, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found table with tableName ${req.params.tableName}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving amount with tableName " + req.params.tableName
        });
      }
    } else res.send(data);
  });
};
