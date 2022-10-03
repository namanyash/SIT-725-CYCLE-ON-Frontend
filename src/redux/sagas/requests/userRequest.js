import axios from "axios";
import { BASE_URL } from "../../../../apiConfig";

export function requestGetUser() {
  return axios.request({
    method: "get",
    url: BASE_URL + "/users/getUser",
  });
}
