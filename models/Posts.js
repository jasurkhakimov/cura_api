module.exports = (sequelize, Sequelize) => {
	const Posts = sequelize.define("Posts", {
		ID: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING
		},
		timestamps: false
	});

	return Posts;
};