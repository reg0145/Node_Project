import data from "../data/tweet.js";

// GET /tweets
// GET /tweets?username=:username
export const getTweets = (req, res) => {
    res.status(200).json(data.getTweets(req.query.username));
}
// GET /tweets/:id
export const getTweet = (req, res) => {
    const id = req.params.id;
    const tweet = data.getTweet(id);
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json({ message: `Tweet id(${id}) not found` });
    }
}

// POST /tweeets
export const createTweet = (req, res) => {
    data.createTweet(req.body.text, req.body.name, req.body.username);
    res.status(201).json(data.getTweets());
}

export const updateTweet = (req, res) => {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = data.updateTweet(id, text);
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json({ message: `Tweet id(${id}) not found` });
    }
}

export const deleteTweet = (req, res) => {
    deleteTweet(req.params.id);
    res.sendStatus(204);
}
