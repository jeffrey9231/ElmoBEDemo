## Elmo - Backend Demo (Node.js)

## Feature

- Integrated [twitter](https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-search) API to get users information.

## Installation

- node

Need to install [node](https://nodejs.org/en/download/) as the run time environment.

- start the app on http://localhost:3001/

```bash
npm install && npm run dev
```

## Test

```bash
npm run test
```

## Tech

- [Joi](https://www.npmjs.com/package/joi) - JavaScript Input Validation
- [Jest](https://jestjs.io/) - JavaScript Testing Framework
- [express](https://www.npmjs.com/package/express) - JavaScript web server framework
- [swagger-ui](https://www.npmjs.com/package/swagger-ui-express) - tool for generating API docs

## API

#### GET /api-docs

This endpoint will serve the API specification

[Here](http://localhost:3001/api-docs/) for more api example.

#### GET /v1/search

This endpoint allows you to search twitter user by topical interest, full name, company name, location, or other criteria.

| Headers            |
| ------------------ |
| None Authorization |

required field(\*)

| Name | Type   | Description                                   |
| ---- | ------ | --------------------------------------------- |
| q\*  | string | The search query to run against people search |

#### GET /v1/details

This endpoint allows you to search twitter user details by id.

| Headers            |
| ------------------ |
| None Authorization |

required field(\*)

| Name | Type   | Description                          |
| ---- | ------ | ------------------------------------ |
| id\* | string | To search twitter user details by id |

## How to use swagger-ui

This project integrates swagger-ui for a better user manually testing.
[Here](https://www.blazemeter.com/blog/getting-started-with-swagger-ui) can get step by step document.

1.  go to [project](http://localhost:3001/api-docs/)
1.  Click Post label
1.  Click _Try it out_ button
1.  Change post body to your emails
1.  Click _Execute_ button to show your results

## Todos

- Integrated swagger validation to replace Joi for more concise of API specification.
