const db = require("../models/index.js");
const Deps = db.Deps;
const DepTypes = db.DepTypes;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Deps.findAll({
        include: [
            { model: DepTypes }
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