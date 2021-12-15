import {posts} from "../../../resources";

export default function handler(req, res) {
    if (req.method === 'GET') {
        const { id } = req.query
        const post = posts.find(post => post.id === parseInt(id))
        if (!post) {
            res.status(404).json({
                error: 'Not found.',
            })
        }
        res.status(200).json(post)
    }
    if (req.method === 'PUT') {
        const body = req.body
        const { id } = req.query
        const post = posts.find(post => post.id === parseInt(id))
        if (!id) {
            res.status(404).json({
                error: 'Please provide a post ID.',
            })
        }
        if (!post) {
            res.status(404).json({
                error: 'Post not found.',
            })
        }
        if (!body.title || !body.content) {
            res.status(403).end('Please provide a title and content within your body.')
        }
        res.status(200).json({
            id: parseInt(id),
            title: body.title,
            content: body.content,
            created_at: new Date,
        })
    }
    if (req.method === 'DELETE') {
        const { id } = req.query
        const post = posts.find(post => post.id === parseInt(id))
        if (!post) {
            res.status(404).json({
                error: 'Post not found.',
            })
        }
        res.status(200).json({
            code: 200,
            message: 'Post deleted.'
        })
    }
}
