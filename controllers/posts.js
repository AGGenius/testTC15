const Post = require('../models/Post.js');

const createPost = async(req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).send(post);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'There was a problem trying to create a post.'});
    };
};

const getAllPosts =  async(req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).send(posts);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'There was a problem trying to get all posts.'});
    };
};

const getPostByID = async(req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findById(id);
        res.status(200).send(post);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: `There was a problem trying to get the post id: ${id}`});
    };
};

const getPostByTittle = async(req, res) => {
    try {
        const tittle = req.params.tittle;
        const post = await Post.find({tittle: tittle});
        res.status(200).send(post);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: `There was a problem trying to get the post tittle: ${tittle}`});
    };
};

const updatePostByID = async(req, res) => {
    try {
        const id = req.params.id;
        await Post.updateOne(
            {_id: id},
            {
                $set: { tittle: req.body.tittle, body: req.body.body},
                $currentDate: {lastModified: true}
            }
        );
        const updatedPost = await Post.findById(id);
        res.status(200).send(updatedPost);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: `There was a problem trying to update the post.`})
    };
};

const deletePostById = async(req, res) => {
    try {
        const id = req.params.id;
        const deletedPost = await Post.findById(id);
        await Post.deleteOne({_id: id});
        res.status(200).send(deletedPost);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: `There was a problem trying to delete the post.`});
    };
};

module.exports = {createPost, getAllPosts, getPostByID, getPostByTittle, updatePostByID, deletePostById};