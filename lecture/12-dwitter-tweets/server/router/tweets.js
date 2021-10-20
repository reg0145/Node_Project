import express from 'express';
import 'express-async-errors';
import tweetcontroller from '../controller/tweetcontroller.js';

const router = express.Router();
// GET /tweets
router.get('/', tweetcontroller.getTweets);
// POST /tweeets
router.post('/', tweetcontroller.createTweet);
// GET /tweets/:id
router.get('/:id', tweetcontroller.getUserTweets);
// PUT /tweets/:id
router.put('/:id', tweetcontroller.updateTweet);
// DELETE /tweets/:id
router.delete('/:id',  tweetcontroller.deleteTweet);

export default router;
