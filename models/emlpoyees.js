const Posts = require("./Posts");
const Branches = require("./Branches");
const Deps = require("./Deps");

module.exports = (sequelize, Sequelize) => {
	const Employees = sequelize.define("Employees", {
		ID: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		bp: {
			type: Sequelize.INTEGER
		},
		name: {
			type: Sequelize.STRING
		},
		postID: {
			type: Sequelize.INTEGER,
			
			references: {
				model: Posts,
				key: 'ID'
			}
		},
		depID: {
			type: Sequelize.INTEGER,
			
			references: {
				model: Deps,
				key: 'ID'
			}
		},
		branchID: {
			type: Sequelize.INTEGER,
			
			references: {
				model: Branches,
				key: 'ID'
			}
		},
		empCode: {
			type: Sequelize.INTEGER,
		},
		empNCICode: {
			type: Sequelize.INTEGER,
		},
		username: {
			type: Sequelize.STRING,
		},
		status: {
			type: Sequelize.INTEGER,
			defaultValue: 1
		},
		timestamps: false
	});

	return Employees;
};