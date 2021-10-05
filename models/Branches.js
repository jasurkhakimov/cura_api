module.exports = (sequelize, Sequelize) => {
	const Branches = sequelize.define("Branches", {
		ID: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING
		},	
	},
	{
		timestamps: false,
		createdAt: false,
		updatedAt: false,
	});

	return Branches;
}
