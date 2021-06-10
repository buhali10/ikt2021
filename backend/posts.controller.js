import { PostService } from './db.sqlqueries.js';

export const PostController = {

    readAll: (req, res) => {
        PostService.getAll((err, result) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while getting all posts",
                });
            else
                console.log(result);
                let arr = []
                result.forEach( post =>
                {
                    let buff = new Buffer(post.image, 'base64');
                    let text = buff.toString('ascii');
                    post.image = text;
                    arr.push(post)
                });
                res.json(result);
        });
    },

    create: (req, res) => {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!",
            });
        }
        const post = {...req.body };
        PostService.create(post, (err, result) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the post.",
                });
            else res.json(result);
        });
    },

    delete: (req, res) => {
        PostService.remove(req.params.postId, (err, result) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while delete the post",
                });
            else res.json(result);
        });
    },

    update: (req, res) => {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!",
            });
        }
        const post = {...req.body };
        PostService.updateById(
            req.params.postId,
            post,
            (err, result) => {
                if (err)
                    res.status(500).send({
                        message: err.message || "Some error occurred while update the post",
                    });
                else res.json(result);
            }
        );
    },

    readOne: (req, res) => {
        PostService.findById(req.params.postId, (err, result) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while getting one post",
                });
            else res.json(result);
        });
    },
    readOneByTitle: (req, res) => {
        console.log(req.body);
        const title = req.body.title;
        console.log('title:', title);
        PostService.findByTitle(title, (err, result) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while getting one post",
                });
            else res.json(result);
        });
    },
};
