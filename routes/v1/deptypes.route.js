module.exports = app => {
    const deptypes = require("../../controllers/deptypes.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", deptypes.create);
  
    // Retrieve all deptypes
    router.get("/", deptypes.findAll);
  
    // Retrieve all published deptypes
    // router.get("/published", deptypes.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    router.get("/:id", deptypes.findOne);
  
    // // Update a Tutorial with id
    router.put("/:id", deptypes.update);
  
    // // Delete a Tutorial with id
    router.delete("/:id", deptypes.delete);
  
    // // Delete all deptypes
    // router.delete("/", deptypes.deleteAll);
  
    app.use('/api/v1/deptypes', router);
  };