
module.exports = (sequelize, Sequelize) => {
	const Emlpoyees = require("./Emlpoyees")(sequelize, Sequelize);
	const Roles = require("./Roles")(sequelize, Sequelize);
	
	const Mapping = sequelize.define("Mapping", {
		ID: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		empID: {
			type: Sequelize.STRING,
            references: {
                model: emlpoyees,
                key: 'ID'
            }
		},
		roleID: {
			type: Sequelize.STRING,
            references: {
                model: Roles,
                key: 'ID'
            }
		},
	}, {
		timestamps: false,
		createdAt: false,
		updatedAt: false,
	});

	return Mapping;
};
