
module.exports = (sequelize, Sequelize) => {
	const DepTypes = require("./DepTypes")(sequelize, Sequelize);
	
	const Deps = sequelize.define("Deps", {
		ID: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING
		},
		type: {
			type: Sequelize.INTEGER,
			
			references: {
				model: DepTypes,
				key: 'ID'
			}
		},
	},
	{
		timestamps: false,
		createdAt: false,
		updatedAt: false,
	});

	return Deps;
};