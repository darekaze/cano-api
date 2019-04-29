/* eslint-disable array-callback-return */
const Promise = require('bluebird');

const {
  sequelize,
  Post,
} = require('../src/models');
const posts = require('./posts.json');

sequelize.sync({ force: true })
  .then(async () => {
    await Promise.all(
      posts.map((post) => {
        Post.create(post);
      }),
    );
  });
