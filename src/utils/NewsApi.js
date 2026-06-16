const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://nomoreparties.co/news/v2/everything";

function getNewsFromDate() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date.toISOString().split("T")[0];
}

function getNewsToDate() {
  return new Date().toISOString().split("T")[0];
}

export function searchNews(query) {
  return fetch(
    `${BASE_URL}?q=${query}&apiKey=${API_KEY}&from=${getNewsFromDate()}&to=${getNewsToDate()}&pageSize=100`,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na requisição");
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}
