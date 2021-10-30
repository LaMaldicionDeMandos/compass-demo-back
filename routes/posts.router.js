const express = require('express');
const postsService = require('../services/posts.service');
const router = express.Router();

router.get('', (req, res, next) => {
    postsService.getAll()
        .then(res.send.bind(res))
        .catch(e => res.status(400).send(e));
});

module.exports = router;
