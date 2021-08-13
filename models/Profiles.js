module.exports = (sequelize, Sequelize) => {
	const Profiles = sequelize.define("Profiles", {
		ID: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING
		},
		timestamps: false
	});

	return Profiles;
};