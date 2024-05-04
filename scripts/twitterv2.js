const https = require('https');

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

  const options = {
    method: 'POST',
    headers: headers
  };

  return new Promise((resolve, reject) => {
    const req = https.request(endpoint, options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log('Tweet sent successfully:', data);
          resolve(data);
        } else {
          reject(new Error(`Failed to send tweet: ${data}`));
        }
      });
    });

    req.on('error', (error) => {
      console.error('Error sending tweet:', error.message);
      reject(error);
    });

    req.write(body);
    req.end();
  });
}

// Call the function and handle errors
sendTweet(tweetText, bearerToken)
  .then(() => {
    process.exit(0); // Exit with success status
  })
  .catch((error) => {
    process.exit(1); // Exit with err

