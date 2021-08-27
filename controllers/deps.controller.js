const db = require("../models/index.js");
const Deps = db.Deps;
const DepTypes = db.DepTypes;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Deps.findAll({
        include: [
            { model: DepTypes, nested: true }
        ]
    })
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

    Deps.findByPk(id, {
        include: [
            { model: DepTypes, nested: true }
        ]
    })
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
    console.log('----- ',req.body, id);
    Deps.update(req.body, {
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

    Deps.destroy({
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
    const dep = {
        name: req.body.name,
        type: req.body.type,
    };

    // Save Tutorial in the database
    Deps.create(dep, { fields: ['name', 'type'] })
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