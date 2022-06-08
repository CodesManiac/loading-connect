import axios from "axios";
import cookie from "js-cookie";

export async function postCall(endpoint, data, headers) {
  const token = cookie.get('token');

  return axios({
    method: "POST",
    url: endpoint,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...headers,
    },
    data,
  })
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
}

export async function getCall(endpoint, headers) {
  const token = cookie.get('token');
  return axios({
    method: "GET",
    url: endpoint,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  })
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
}

export async function patchCall(endpoint, data, headers) {
  const token = cookie.get('token');
  return axios({
    method: "PATCH",
    url: endpoint,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...headers,
    },
    data,
  })
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
}

export async function putCall(endpoint, data, headers) {
  const token = cookie.get('token');
  return axios({
    method: "PUT",
    url: endpoint,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...headers,
    },
    data,
  })
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
}
