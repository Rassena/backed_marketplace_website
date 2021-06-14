// current in work


module.exports = app => {
    const analytics = require("../controllers/analytic.controller.js");
  
    // Show all ads beetween dates
    app.get("/analytics/showAd", analytics.showAd);
  
  };
