// current in work


module.exports = app => {
    const analytics = require("../controllers/analytic.controller.js");
  
    // Calculate ration negotiable/noNegotiable
    app.get("/analytics/ration/", analytics.rationAd);

    // Count paid ad 
    //app.get("/analytics/count/ad/paid", analytics.countAdPaid);

    // Count ended ad (paid or expired) 
    //app.get("/analytics/count/ad/ended", analytics.countAdEnded);

    // Count all rows in tableName eg ad
    app.get("/analytics/count/:tableName", analytics.countAll);


  
  };
