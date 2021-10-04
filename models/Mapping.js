
module.exports = (sequelize, Sequelize) => {
	const Emlpoyees = require("./Employees")(sequelize, Sequelize);
	const Roles = require("./Roles")(sequelize, Sequelize);

	const Mapping = sequelize.define("Mapping", {
		ID: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		empID: {
			type: Sequelize.INTEGER,
            references: {
                model: Emlpoyees,
                key: 'ID'
            }
		},
		roleID: {
			type: Sequelize.INTEGER,
            references: {
                model: Roles,
                key: 'ID'
            }
		},
	}, {
		freezeTableName: true,
		tableName: 'Mapping',
		timestamps: false,
		createdAt: false,
		updatedAt: false,
	});

	return Mapping;
};
