const express = require('express');
const router = express.Router();
const {createPost, getAllPosts, getPostByID, getPostByTittle, updatePostByID, deletePostById} = require('../controllers/posts.js')

router.post('/create', createPost);

router.get('/', getAllPosts);

router.get('/id/:id', getPostByID);

router.get('/tittle/:tittle', getPostByTittle);

router.put('/id/:id', updatePostByID);

router.delete('/id/:id', deletePostById);

module.exports = router;