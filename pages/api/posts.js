import { posts } from "../../resources";

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.json(posts)
    }
    if (req.method === 'POST') {
        // const body = JSON.parse(req.body)
        const body = req.body
        if (!body.title || !body.content) {
            res.status(403).end('Please provide a title and content within your body.')
        }
        res.status(200).json({
            id: Math.floor(Math.random() * 10),
            title: body.title,
            content: body.content,
            created_at: new Date,
        })
    }
}