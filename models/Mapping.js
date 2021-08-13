const Emlpoyees = require("./Emlpoyees");
const Roles = require("./Roles");

module.exports = (sequelize, Sequelize) => {
	const Mapping = sequelize.define("Mapping", {
		ID: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		empID: {
			type: Sequelize.STRING,
            references: {
                model: emlpoyees,
                key: 'ID'
            }
		},
		roleID: {
			type: Sequelize.STRING,
            references: {
                model: Roles,
                key: 'ID'
            }
		},
		timestamps: false
	});

	return Mapping;
};
