const db = require("../models/index.js");
const Branches = db.Branches;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Branches.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Branches.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Branches.update(req.body, {
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update instance with id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating instance with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Branches.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Instance was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete instance with id=${id}. Instance was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete instance with id=" + id
            });
        });
};


exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const branch = {
        name: req.body.name,
    };

    // Save Tutorial in the database
    Branches.create(branch, { fields: ['name'] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Instance."
            });
        });
};

