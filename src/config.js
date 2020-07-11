/* eslint-disable no-unused-vars */
import path from "path";
import merge from "lodash/merge";

/* istanbul ignore next */
const requireProcessEnv = (name) => {
  if (!process.env[name]) {
    throw new Error("You must set the " + name + " environment variable");
  }
  return process.env[name];
};

/* istanbul ignore next */
if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv-safe");
  dotenv.config({
    path: path.join(__dirname, "../.env"),
    example: path.join(__dirname, "../.env.example"),
  });
}

const config = {
  all: {
    env: process.env.NODE_ENV || "development",
    root: path.join(__dirname, ".."),
    port: process.env.PORT || 3001,
    ip: process.env.IP || "0.0.0.0",
    apiRoot: process.env.API_ROOT || "/v1",
    twitterSearchApiUrl:
      process.env.TWITTER_SEARCH_API_URL ||
      "https://api.twitter.com/1.1/users/search.json",
    twitterShowApiUrl:
      process.env.TWITTER_SHOW_API_URL ||
      "https://api.twitter.com/1.1/users/show.json",
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    token: process.env.TOKEN,
    tokenSecret: process.env.TOKEN_SECRET,
  },
  test: {},
  development: {},
  production: {
    ip: process.env.IP || undefined,
    port: process.env.PORT || 8080,
  },
};

module.exports = merge(config.all, config[config.all.env]);
export default module.exports;
