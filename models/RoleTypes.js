module.exports = (sequelize, Sequelize) => {
	const RoleTypes = sequelize.define("RoleTypes", {
		ID: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING
		},
		timestamps: false
	});

	return RoleTypes;
};
