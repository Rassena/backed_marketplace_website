module.exports = app => {
    const categorys = require("../controllers/category.controller.js");
  
    // Create a new Category
    app.post("/categorys", categorys.create);
  
    // Retrieve all Categorys
    app.get("/categorys", categorys.findAll);
  
    // Retrieve a single Category with categoryName
    app.get("/categorys/:categoryName", categorys.findOne);
  
    // Update a Category with categoryName
    app.put("/categorys/:categoryName", categorys.update);
  
    // Delete a Category with categoryName
    app.delete("/categorys/:categoryName", categorys.delete);
  
    // Create a new Category
    app.delete("/categorys", categorys.deleteAll);
  };