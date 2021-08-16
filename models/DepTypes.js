module.exports = (sequelize, Sequelize) => {
	
	const DepTypes = sequelize.define("DepTypes", {
		ID: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING
		},
	}, {
		timestamps: false,
		createdAt: false,
		updatedAt: false,
	});

	return DepTypes;
};
