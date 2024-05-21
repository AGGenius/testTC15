const app = require('../index');
const request = require('supertest');
const Post = require('../models/Post.js')

describe('createPost', () => {
    const post = {
        tittle: "Some tittle",
        body: "Some body",
    };

    test("Create a post", async () => {
        let postCount = await Post.countDocuments({});

        expect(postCount).toBe(0);

        resPost = await request(app).post('/create').send(post).expect(201);

        postCount = await Post.countDocuments({});

        expect(postCount).toBe(1);
        expect(resPost._body._id).toBeDefined();
        expect(resPost._body.tittle).toBeDefined();
        expect(resPost._body.body).toBeDefined();
    });

    afterAll(() => {
        return Post.deleteMany();
    });
});