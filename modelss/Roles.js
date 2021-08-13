const RoleTypes = require("./RoleTypes");
const Profiles = require("./Profiles");

module.exports = (sequelize, Sequelize) => {
	const Roles = sequelize.define("Roles", {
		ID: {
			type: Sequelize.INTEGER,
			primaryKey: true
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
		timestamps: false
	});

	return Roles;
};