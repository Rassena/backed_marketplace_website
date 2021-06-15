// current in work


module.exports = app => {
    const analytics = require("../controllers/analytic.controller.js");
  
    // Count rows in tableName
    app.get("/analytics/count/:tableName", analytics.count);
  
  };
