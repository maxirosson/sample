const Twit = require('twit');

const consumerKey = process.argv[2];
const tweetText = process.argv[3];


// Replace with your Twitter API credentials
const T = new Twit({
  consumer_key: ${consumerKey},
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token: 'YOUR_ACCESS_TOKEN',
  access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET',
});

// Send the tweet
T.post('statuses/update', { status: tweetText }, (err, data, response) => {
  if (err) {
    console.error('Error sending tweet:', err);
  } else {
    console.log('Tweet sent successfully:', data);
  }
});
