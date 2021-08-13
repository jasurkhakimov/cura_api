module.exports = (sequelize, Sequelize) => {
	const DepTypes = sequelize.define("DepTypes", {
		ID: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING
		},
		timestamps: false
	});

	return DepTypes;
};
