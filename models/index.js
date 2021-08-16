const dbConfig = require("../config/dbconfig.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    dialectOptions: {
        options: {
            enableArithAbort: false,
            cryptoCredentialsDetails: {
                minVersion: 'TLSv1'
            }
        }
    },
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Branches = require("./Branches.js")(sequelize, Sequelize);
db.DepTypes = require("./DepTypes.js")(sequelize, Sequelize);
db.Deps = require("./Deps.js")(sequelize, Sequelize);
db.Roles = require("./Roles.js")(sequelize, Sequelize);
db.RoleTypes = require("./RoleTypes.js")(sequelize, Sequelize);
db.Profiles = require("./Profiles.js")(sequelize, Sequelize);
db.Posts = require("./Posts.js")(sequelize, Sequelize);

db.Roles.belongsTo(db.RoleTypes, {
    foreignKey: {
        name: 'type'
    }
})

db.RoleTypes.hasOne(db.Roles, {
    foreignKey: {
        name: 'type'
    }
})

db.Roles.belongsTo(db.Profiles, {
    foreignKey: {
        name: 'profile'
    }
})

db.Profiles.hasOne(db.Roles, {
    foreignKey: {
        name: 'profile'
    }
})

db.DepTypes.hasOne(db.Deps, {
    foreignKey: {
        name: 'type'
    }
})
db.Deps.belongsTo(db.DepTypes, {
    foreignKey: {
        name: 'type'
    }
})

module.exports = db;