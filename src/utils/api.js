import rp from "request-promise";

const get = (url, header) =>
  rp
    .get(url, header)
    .then((res) => JSON.parse(res))
    .catch((err) => {
      // throw error to controller
      throw new Error(JSON.stringify(err.response.body));
    });

export { get };
