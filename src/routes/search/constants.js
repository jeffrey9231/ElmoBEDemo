import { consumerKey, consumerSecret, token, tokenSecret } from "../../config";

export const INITIAL_TWITTER_HEADER = () => ({
  // oauth1 headers
  oauth: {
    consumer_key: consumerKey,
    consumer_secret: consumerSecret,
    token,
    token_secret: tokenSecret,
  },
});
