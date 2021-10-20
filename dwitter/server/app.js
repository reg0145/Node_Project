import express from 'express';
import morgan from 'morgan';
import tweetRouter from './routes/tweet.js';

const app = express();

app.use(express.json());
app.use(morgan('common'));
app.use('/tweets', tweetRouter);
app.use((req, res, next) => {
    res.status(404).json({ message:'Found not page!' });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message:'Sorry, Try again..' });
});

app.listen(8080);