module.exports = app => {
    const profiles = require("../../controllers/profiles.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", profiles.create);
  
    // Retrieve all profiles
    router.get("/", profiles.findAll);
  
    // Retrieve all published profiles
    // router.get("/published", profiles.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    router.get("/:id", profiles.findOne);
  
    // // Update a Tutorial with id
    router.put("/:id", profiles.update);
  
    // // Delete a Tutorial with id
    router.delete("/:id", profiles.delete);
  
    // // Delete all profiles
    // router.delete("/", profiles.deleteAll);
  
    app.use('/api/v1/profiles', router);
  };