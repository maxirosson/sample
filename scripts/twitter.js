const Twit = require('twit');

const consumerKey = process.argv[2];
const consumerSecret = process.argv[3];
const accessToken = process.argv[4];
const accessTokenSecret = process.argv[5];

const tweetText = process.argv[6];


// Replace with your Twitter API credentials
const T = new Twit({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token: accessToken,
  access_token_secret: accessTokenSecret,
});


// Function to send tweet synchronously
async function sendTweet(tweetText) {
  try {
    // Send the tweet
    const { data } = await T.post('statuses/update', { status: tweetText });
    console.log('Tweet sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Error sending tweet:', error);
    throw error; // Throw the error to indicate tweet sending failed
  }
}

// Call the function and handle errors
sendTweet(tweetText)
  .then(() => {
    process.exit(0); // Exit with success status
  })
  .catch((error) => {
    process.exit(1); // Exit with error status
  });
