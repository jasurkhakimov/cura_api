const db = require("../models/index.js");
const Mapping = db.Mapping;
const Roles = db.Roles;
const Employees = db.Employees;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');

exports.findAll = (req, res) => {
    Mapping.findAll({
        include: [
            { model: Roles, all: true, nested: true },
            { model: Employees, all: true, nested: true }
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

    Mapping.findByPk(id, {
        include: [
            { model: Roles, all: true, nested: true },
            { model: Employees, all: true, nested: true }
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

exports.findMFO = (req, res) => {
    const id = req.params.id;
    console.log("-----------------", id);

    db.sequelize.query(
        `   select * from Mapping a
            left join Employees b
            on
            a.empID = b.ID
            left join Roles c
            on
            a.roleID = c.ID
            left join Branches d
            on
            b.branchID = d.ID
            where d.ID = ${id}`, { type: QueryTypes.SELECT })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Mapping.update(req.body, {
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

    Mapping.destroy({
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
    if (!req.body.empID && !req.body.empID) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const mapping = {
        empID: req.body.empID,
        roleID: req.body.roleID,
    };

    // Save Tutorial in the database
    Mapping.create(mapping, { fields: ['empID', 'roleID'] })
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