let tweets = [
    {
        id : 1,
        text: '드림코더분들 화이팅!',
        createdAt: Date.now().toString(),
        name: 'Bob',
        username: 'bob',
        url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    }
];

export function getTweets(username){
    return username
        ? tweets.filter((tweet) => tweet.username === username)
        : tweets;
}

export function getTweet(id){
    return tweets.find((tweet) => tweet.id.toString() === id);
}

export function createTweet(text, name, username){
    const tweet = {
        id : Date.now().toString(),
        text,
        createdAt: new Date(),
        name: 'Bob',
        username: 'bob',
    };
    tweets = [tweet, ...tweets];
    return tweets;
}

export function updateTweet(id, text){
    const tweet = tweets.find((tweet) => tweet.id.toString() === id);
    if (tweet) {
        tweet.text = text;
    }
    return tweet;
}

export function deleteTweet(id){
    const tweet = tweets.filter((tweet) => tweet.id.toString() !== id);
    tweets.pop(tweet);
}
