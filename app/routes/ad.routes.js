module.exports = app => {
    const ads = require("../controllers/ad.controller.js");
  
    // Create a new Ad
    app.post("/ads", ads.create);
  
    // Retrieve all Ads
    app.get("/ads", ads.findAll);

    // Retrive all negotiable ads
    app.get("/ads/negotiable",ads.getNegotiable);

    //Retrieve inPage Ads by page 
    app.get("/ads/page/:page/:inPage", ads.getPage);

    //Retrieve Ads by subcategory name
    app.get("/ads/subcategory/:subCategoryName", ads.getBySubCategory);

    // Retrieve a single Ad with adId
    app.get("/ads/:adId", ads.findOne);

    // Update a Ad with adId
    app.put("/ads/:adId", ads.update);
  
    // Delete a Ad with adId
    app.delete("/ads/:adId", ads.delete);
  
    // Create a new Ad
    app.delete("/ads", ads.deleteAll);


    // Retrive Ads beetwen price price1 and price2
    app.get("/ads/:price1/:price2",ads.findBetweenPrice);

    






  };