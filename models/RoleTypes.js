module.exports = (sequelize, Sequelize) => {
	const RoleTypes = sequelize.define("RoleTypes", {
		ID: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING
		},
	}, {
		timestamps: false,
		createdAt: false,
		updatedAt: false,
	});

	return RoleTypes;
};
