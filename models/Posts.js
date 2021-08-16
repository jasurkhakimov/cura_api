module.exports = (sequelize, Sequelize) => {
	const Posts = sequelize.define("Posts", {
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

	return Posts;
};