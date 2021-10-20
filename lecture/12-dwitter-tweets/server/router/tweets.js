import express from 'express';
import 'express-async-errors';
import * as controller from '../controller/tweetcontroller.js';

const router = express.Router();
// GET /tweets
router.get('/', controller.getTweets);
// POST /tweeets
router.post('/', controller.createTweet);
// GET /tweets/:id
router.get('/:id', controller.getTweet);
// PUT /tweets/:id
router.put('/:id', controller.updateTweet);
// DELETE /tweets/:id
router.delete('/:id',  controller.deleteTweet);

export default router;
