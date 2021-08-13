module.exports = (sequelize, Sequelize) => {
	const Branches = sequelize.define("Branches", {
		ID: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING
		},
		timestamps: false
	});

	return Branches;
};
