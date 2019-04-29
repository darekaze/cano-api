const { Post } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      let posts = null;
      const { offset, limit } = req.query;
      posts = await Post.findAll({ offset, limit });
      res.send(posts);
    } catch (err) {
      res.status(500).send({
        error: 'Error in fetching posts',
      });
    }
  },
  async show(req, res) {
    try {
      const post = await Post.findByPk(req.params.postId);
      res.send(post);
    } catch (err) {
      res.status(500).send({
        error: 'Error in showing post',
      });
    }
  },
  async post(req, res) {
    try {
      const post = await Post.create(req.body);
      res.send(post);
    } catch (err) {
      switch (err.name) {
        case 'SequelizeValidationError':
          res.status(400).send(err);
          break;
        default:
          res.status(500).send({
            error: 'Error in adding the post',
          });
      }
    }
  },
  async put(req, res) {
    try {
      await Post.update(req.body, {
        where: {
          id: req.params.postId,
        },
      });
      res.send({ updated: true });
    } catch (err) {
      res.status(500).send({
        error: 'Error in updating the post',
      });
    }
  },
};
