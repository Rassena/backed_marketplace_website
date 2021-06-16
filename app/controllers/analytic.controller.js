const Analytic = require("../models/analytic.model.js");

// Find amount of row in tableName
exports.countAll = (req, res) => {
  Analytic.countAll(req.params.tableName, (err, data) => {
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


// Calculate ration negotiable/noNegotiablw
exports.rationAd = (req, res) => {
  Analytic.rationAd((err, data) => {
    if (err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving ads."
    });
  else res.send(data);
});
};
