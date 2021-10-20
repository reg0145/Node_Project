export default class TweetService {

  async getTweets(username) {
    const url = username
    ? `http://localhost:8080/tweets?username=${username}`
    : `http://localhost:8080/tweets`;

    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (err) {console.error(err)}
  }
    /* return username
      ? this.tweets.filter((tweet) => tweet.username === username)
      : this.tweets; */

  async postTweet(text) {
    const tweet = {
      id: Date.now(),
      createdAt: new Date(),
      name: 'Ellie',
      username: 'ellie',
      text,
    };
    
    this.tweets.push(tweet);
    return tweet;
  }

  async deleteTweet(tweetId) {
    this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
  }

  async updateTweet(tweetId, text) {
    const tweet = this.tweets.find((tweet) => tweet.id === tweetId);
    if (!tweet) {
      throw new Error('tweet not found!');
    }
    tweet.text = text;
    return tweet;
  }
}
