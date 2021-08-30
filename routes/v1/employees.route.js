module.exports = app => {
    const employees = require("../../controllers/employees.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", employees.create);
  
    // Retrieve all employees
    router.get("/", employees.findAll);
  
    // Retrieve all published employees
    // router.get("/published", employees.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    router.get("/:id", employees.findOne);
    
    router.get("/mfo/:id", employees.findMFO);
  
    // // Update a Tutorial with id
    router.put("/:id", employees.update);
  
    // // Delete a Tutorial with id
    router.delete("/:id", employees.delete);
    
    router.put("/accept/:id", employees.accept);
    
    router.put("/edited/:id", employees.edited);
  
    // // Delete all employees
    // router.delete("/", employees.deleteAll);
  
    app.use('/api/v1/employees', router);
  };