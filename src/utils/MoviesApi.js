import { MOVIE_URL } from "./const";

function parseResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`));
}

const getMovies = () =>
  fetch(`${MOVIE_URL}/beatfilm-movies`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // authorization: "Bearer ca5a3c83-c808-4b2d-aa04-cb48fd881373",
    },
  }).then((res) => parseResponse(res));

export { getMovies };
