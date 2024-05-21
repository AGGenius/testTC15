const express = require('express');
const router = express.Router();
const postRoutes = require('./posts');

router.use('/', postRoutes);

module.exports = router;