import express from 'express';

const router = express.Router();

let tweets = [
    {
      id: 1,
      text: '드림코딩에서 강의 들으면 너무 좋으다',
      createdAt: Date.now.toString(),
      name: 'Bob',
      username: 'bob',
      url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
];

router.use((req, res, next) => {
    res.setHeader('Content-Type','application/json');
    next('route');
})

router.route('/')
      .get((req, res) => {
            if (req.query.username) {
                console.log(req.query.username);
                const tweet = tweets.filter((tweet) => tweet.username === req.query.username);
                if (tweet)
                    return res.status(200).json(tweet);
                else
                    return res.status(400).json({Message:'Username not found'});
            }
            res.status(200).json(tweets);
      })
      .post((req, res) =>{
            if (req.body) {
                let tweet = JSON.parse(JSON.stringify(req.body));
                tweet.id = Date.now();
                tweet.createdAt = new Date();
                tweets.push(tweet);
                return res.status(201).json(tweets);
            }
            res.status(404).json({Message:'Tweet not Created'});
      });

router.route('/:id')
      .get((req, res, next) => {
            const tweet = tweets.filter((tweet) => tweet.id.toString() === req.params.id);
            return res.status(200).json(tweet);
      })
      .put((req, res, next) => {
            if (req.body.text) {
                let tweet = tweets.find((tweet) => tweet.id.toString() === req.params.id);
                if (tweet) {
                    tweet.text = req.body.text;
                    return res.status(200).json(tweet);
                }
            }
            res.status(404).json({Message:'Tweet not updated'});
      })
      .delete((req, res, next) => {
            if (req.params.id) {
                const tweet = tweets.find((tweet) => tweet.id.toString() === req.params.id);
                if (tweet) {
                    tweets.pop(tweet);
                    return res.sendStatus(204);
                }               
            }
            res.status(404).json({Message:'Tweet not deleted'});
      });

export default router;