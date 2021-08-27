const db = require("../models/index.js");
const Roles = db.Roles;
const RoleTypes = db.RoleTypes;
const Profiles = db.Profiles;
// const DepTypes = db.DepTypes;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Roles.findAll({
        include: [
            { model: RoleTypes },
            { model: Profiles }
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

exports.findFromRoleType = (req, res) => {
    const id = req.params.id;

    Roles.findAll({
        where: {
            type: id
        },
        include: [
            { model: RoleTypes },
            { model: Profiles }
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

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name && !req.body.techname && !req.body.type && !req.body.profile) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const role = {
        name: req.body.name,
        techname: req.body.techname,
        type: req.body.type,
        profile: req.body.profile,
    };

    // Save Tutorial in the database
    Roles.create(role, { fields: ['name', 'techname', 'type', 'profile'] })
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

exports.delete = (req, res) => {
    const id = req.params.id;

    Roles.destroy({
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

exports.update = (req, res) => {
    const id = req.params.id;

    Roles.update(req.body, {
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