// Quote Garden
// https://pprathameshmore.github.io/QuoteGarden

const API_URL = "https://quote-garden.herokuapp.com/api/v3/quotes";

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

export const fetchRandomQuote = () => {
  return fetch(`${API_URL}/random`, requestOptions)
    .then(res => res.json())
    .then(res => res);
};
