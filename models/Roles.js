
module.exports = (sequelize, Sequelize) => {
	const RoleTypes = require("./RoleTypes")(sequelize, Sequelize);
	const Profiles = require("./Profiles")(sequelize, Sequelize);
	
	const Roles = sequelize.define("Roles", {
		ID: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING
		},
		techname: {
			type: Sequelize.STRING
		},
		type: {
			type: Sequelize.INTEGER,

			references: {
				model: RoleTypes,
				key: 'ID'
			}
		},
		profile: {
			type: Sequelize.INTEGER,

			references: {
				model: Profiles,
				key: 'ID'
			}
		},
	}, {
		timestamps: false,
		createdAt: false,
		updatedAt: false,
	});

	return Roles;
};