module.exports = app => {
    const roles = require("../../controllers/roles.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", roles.create);
  
    // Retrieve all roles
    router.get("/", roles.findAll);
    
    router.get("/type/:id", roles.findFromRoleType);

    
  
    // Retrieve all published roles
    // router.get("/published", roles.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", roles.findOne);
  
    // // Update a Tutorial with id
    router.put("/:id", roles.update);
  
    // // Delete a Tutorial with id
    router.delete("/:id", roles.delete);
  
    // // Delete all roles
    // router.delete("/", roles.deleteAll);
  
    app.use('/api/v1/roles', router);
  };