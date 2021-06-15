module.exports = app => {
    const ads = require("../controllers/ad.controller.js");
  
    // Create a new Ad
    app.post("/ads", ads.create);
  
    // Retrieve all Ads
    app.get("/ads", ads.findAll);

    // Retrive all negotiable ads
    app.get("/ads/negotiable",ads.getNegotiable);

    // Retrive ads by PostDates
    app.get("/ads/date/:postDate1/:postDate2",ads.getByDates);

    //Retrieve inPage Ads by page 
    app.get("/ads/page/:page/:inPage", ads.getPage);

    //Retrieve Ads by subcategory name
    app.get("/ads/subcategory/:subCategoryName", ads.getBySubCategory);

    // Retrieve all Ads with photo url
    app.get("/ads/photo", ads.findAllWithPhoto);

    // Retrieve a single Ad by adId
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