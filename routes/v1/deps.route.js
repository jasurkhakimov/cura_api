module.exports = app => {
    const deps = require("../../controllers/deps.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    // router.post("/", deps.create);
  
    // Retrieve all deps
    router.get("/", deps.findAll);
  
    // Retrieve all published deps
    // router.get("/published", deps.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", deps.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", deps.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", deps.delete);
  
    // // Delete all deps
    // router.delete("/", deps.deleteAll);
  
    app.use('/api/v1/deps', router);
  };