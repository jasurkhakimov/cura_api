const DepTypes = require("./DepTypes");

module.exports = (sequelize, Sequelize) => {
	const Deps = sequelize.define("Deps", {
		ID: {
			type: Sequelize.INTEGER,
			primaryKey: true
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
		timestamps: false
	});

	return Deps;
};