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