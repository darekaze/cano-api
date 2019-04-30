module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Anomynous',
    },
    content: DataTypes.TEXT,
    videoId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    videoTitle: { // showing title
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Post;
};
