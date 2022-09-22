import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const options = {
  headers: {
    "X-Auth-Token": localStorage.getItem("token"),
  },
};

function getData(request, response, error) {
  const url = BASE_URL + request.url;
  axios
    .get(url, options)
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
    .post(url, request.payload, options)
    .then((res) => {
      response(res);
    })
    .catch((err) => {
      error(err);
    });
}

function putData(request, response, error) {
  const url = BASE_URL + request.url;
  axios
    .put(url, request.payload, options)
    .then((res) => {
      response(res);
    })
    .catch((err) => {
      error(err);
    });
}

export { getData, postData, putData };
