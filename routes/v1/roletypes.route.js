module.exports = app => {
    const roletypes = require("../../controllers/roletypes.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", roletypes.create);

    // Retrieve all roletypes
    router.get("/", roletypes.findAll);

    // Retrieve all published roletypes
    // router.get("/published", roletypes.findAllPublished);

    // // Retrieve a single Tutorial with id
    router.get("/:id", roletypes.findOne);

    // // Update a Tutorial with id
    router.put("/:id", roletypes.update);

    // // Delete a Tutorial with id
    router.delete("/:id", roletypes.delete);

    // // Delete all roletypes
    // router.delete("/", roletypes.deleteAll);

    app.use('/api/v1/roletypes', router);
};