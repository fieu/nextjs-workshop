import { posts } from "../../resources";

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.json(posts)
    }
}