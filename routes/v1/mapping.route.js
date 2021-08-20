module.exports = app => {
    const mapping = require("../../controllers/mapping.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", mapping.create);
  
    // Retrieve all mapping
    router.get("/", mapping.findAll);
  
    // Retrieve all published mapping
    // router.get("/published", mapping.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    router.get("/:id", mapping.findOne);
    
    router.get("/mfo/:id", mapping.findMFO);
  
    // // Update a Tutorial with id
    router.put("/:id", mapping.update);
  
    // // Delete a Tutorial with id
    router.delete("/:id", mapping.delete);


  
    // // Delete all mapping
    // router.delete("/", mapping.deleteAll);
  
    app.use('/api/v1/mapping', router);
  };