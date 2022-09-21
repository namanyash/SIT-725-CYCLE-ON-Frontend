import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function getData(request, response, error) {
  const url = BASE_URL + request.url;
  axios
    .get(url)
    .then((res) => {
      response(res);
    })
    .catch((err) => {
      error(err);
    });
}

function postData(request, response, error) {
  const url = BASE_URL + request.url;
  axios
    .post(url, request.payload)
    .then((res) => {
      response(res);
    })
    .catch((err) => {
      error(err);
    });
}

export { getData, postData };
