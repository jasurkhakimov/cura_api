const db = require("../models/index.js");
const Employees = db.Employees;
const Deps = db.Deps;
const Branches = db.Branches;
const Posts = db.Posts;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Employees.findAll({
        include: [
            { model: Deps, all: true, nested: true },
            { model: Posts, nested: true },
            { model: Branches, nested: true },
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

    Employees.findByPk(id, {
        include: [
            { model: Deps, all: true, nested: true },
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

    Employees.findAll({
        where: {
            branchID: id
        },
        include: [
            { model: Deps, all: true, nested: true },
            { model: Posts, all: true, nested: true },
            { model: Branches, all: true, nested: true },
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

    Employees.update(req.body, {
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

    Employees.destroy({
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
    const employee = {
        bp: req.body.bp,
        name: req.body.name,
        postID: req.body.postID,
        depID: req.body.depID,
        branchID: req.body.branchID,
        empCode: req.body.empCode,
        empNCICode: req.body.empNCICode,
        username: req.body.username,
    };

    // Save Tutorial in the database
    Employees.create(employee, { fields: ['name', 'bp', 'postID', 'depID', 'branchID', 'empCode', 'empNCICode', 'username', 'status'] })
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

