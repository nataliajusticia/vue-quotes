// Quote Garden
// https://pprathameshmore.github.io/QuoteGarden

const API_URL = "https://quote-garden.herokuapp.com/api/v3/quotes";

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

export const fetchAuthorQuotes = (author, page = 1, limit = 3) => {
  return fetch(
    `${API_URL}?author=${author}&page=${page}&limit=${limit}`,
    requestOptions
  )
    .then(res => res.json())
    .then(res => res);
};
