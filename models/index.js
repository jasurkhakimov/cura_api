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
db.Employees = require("./Employees.js")(sequelize, Sequelize);
db.Mapping = require("./Mapping.js")(sequelize, Sequelize);
db.Users = require("./Users.js")(sequelize, Sequelize);

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

db.Employees.belongsTo(db.Deps, {
    foreignKey: {
        name: 'depID'
    }
});

db.Employees.belongsTo(db.Posts, {
    foreignKey: {
        name: 'postID'
    }
});

db.Employees.belongsTo(db.Branches, {
    foreignKey: {
        name: 'branchID'
    }
});

db.Deps.hasOne(db.Employees, {
    foreignKey: {
        name: 'depID'
    }
});
db.Posts.hasOne(db.Employees, {
    foreignKey: {
        name: 'postID'
    }
});
db.Branches.hasOne(db.Employees, {
    foreignKey: {
        name: 'branchID'
    }
});

db.Mapping.belongsTo(db.Roles, {
    foreignKey: {
        name: 'roleID'
    }
});

// db.Mapping.belongsTo(db.Employees, {
//     foreignKey: {
//         name: 'empID'
//     }
// });

db.Roles.hasOne(db.Mapping, {
    foreignKey: {
        name: 'roleID'
    }
});

// db.Employees.hasOne(db.Mapping, {
//     foreignKey: {
//         name: 'empID'
//     }
// });


module.exports = db;