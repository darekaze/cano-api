const PostController = require('./controllers/PostController');

module.exports = (app) => {
  app.get('/posts',
    PostController.index);
  app.post('/posts',
    PostController.post);
};
