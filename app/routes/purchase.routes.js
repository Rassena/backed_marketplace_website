module.exports = app => {
    const purchases = require("../controllers/purchase.controller.js");
  
    // Create a new Purchase
    app.post("/purchases", purchases.create);
  
    // Retrieve all Purchases
    app.get("/purchases", purchases.findAll);
  
    // Retrieve a single Purchase with purchaseId
    app.get("/purchases/:purchaseId", purchases.findOne);
  
    // Update a Purchase with purchaseId
    app.put("/purchases/:purchaseId", purchases.update);
  
    // Delete a Purchase with purchaseId
    app.delete("/purchases/:purchaseId", purchases.delete);
  
    // Create a new Purchase
    app.delete("/purchases", purchases.deleteAll);

    //Pay for Purchase
    app.patch("/purchase/:purchaseId", purchases.pay);
  };