module.exports = app => {
    const branches = require("../../controllers/branches.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", branches.create);
  
    // Retrieve all branches
    router.get("/", branches.findAll);
  
    // Retrieve all published branches
    // router.get("/published", branches.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    router.get("/:id", branches.findOne);
  
    // // Update a Tutorial with id
    router.put("/:id", branches.update);
  
    // // Delete a Tutorial with id
    router.delete("/:id", branches.delete);
  
    // // Delete all branches
    // router.delete("/", branches.deleteAll);
  
    app.use('/api/v1/branches', router);
  };