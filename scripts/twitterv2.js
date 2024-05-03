import fetch from 'node-fetch';

const bearerToken = process.argv[2];
const tweetText = process.argv[3];

// Send the tweet
async function sendTweet(tweetText, bearerToken) {
  const endpoint = 'https://api.twitter.com/2/tweets';
  const headers = {
    'Authorization': `Bearer ${bearerToken}`,
    'Content-Type': 'application/json'
  };
  const body = JSON.stringify({
    'text': tweetText
  });

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: body
    });
    const data = await response.json();
    if (response.ok) {
      console.log('Tweet sent successfully:', data);
      return data;
    } else {
      throw new Error(data.errors[0].detail);
    }
  } catch (error) {
    console.error('Error sending tweet:', error.message);
    throw error;
  }
}

sendTweet(tweetText, bearerToken)
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    process.exit(1);
  });
