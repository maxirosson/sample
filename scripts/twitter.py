from typing import List

from decouple import config
from tweepy import Tweet
import tweeps
import traceback

def update_status(text):
    try:
        api_key = config("TWITTER_API_KEY")
        api_secrets = config("TWITTER_API_KEY_SECRET")
        access_token = config("TWITTER_ACCESS_TOKEN")
        access_secret = config("TWITTER_ACCESS_TOKEN_SECRET")

        client = tweepy.Client(consumer_key=api_key,
                               consumer_secret=api_secrets,
                               access_token=access_token,
                               access_token_secret=access_secret)
        
        print("Dry run enabled: " + config("DRY_RUN_ENABLED"))
        if config("DRY_RUN_ENABLED") == "false":
            client.create_tweet(text=text)
            print("Tweet posted:")
        else:
            print("Tweet ignored:")
        
        print(text)
            
    except Exception:
        traceback.print_exc()
        raise
