import api from "../../utils";
import { INITIAL_TWITTER_HEADER } from "./constants";
import { twitterSearchApiUrl, twitterShowApiUrl } from "../../config";

/**
 *  search twitter user by topical interest, full name, company name, location, or other criteria
 * @api {GET} /v1/search
 * @apiName search
 * @apiSuccess search user successly.
 * @apiParameter q
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError {Object} 500 Internal server error.
 */
export const search = async ({ query }, res) => {
  try {
    const header = INITIAL_TWITTER_HEADER();
    // send request to twitter /1.1/users/search.json api
    const users = await api.get(`${twitterSearchApiUrl}?q=${query.q}`, header);
    res.status(200).json(users);
  } catch (err) {
    // twitter responds error
    const errMessage = JSON.parse(err.message);
    console.error(errMessage);

    res.status(400).json({
      message: errMessage,
    });
  }
};

/**
 * search twitter user details by id
 * @api {GET} /v1/details
 * @apiName details
 * @apiSuccess search user successly.
 * @apiParameter id
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError {Object} 500 Internal server error.
 */
export const details = async ({ query }, res) => {
  try {
    const header = INITIAL_TWITTER_HEADER();
    // send request to twitter /1.1/users/show.json api
    const users = await api.get(`${twitterShowApiUrl}?id=${query.id}`, header);
    res.status(200).json(users);
  } catch (err) {
    // responds error
    const errMessage = JSON.parse(err.message);
    console.error(errMessage);

    res.status(400).json({
      message: errMessage,
    });
  }
};
