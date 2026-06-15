const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

try {
  const resposta = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`,
  );
  if (!resposta.ok) {
    throw new Error("Erro na requisição");
  }
  const dados = await resposta.json();
  console.log(dados);
} catch (erro) {
  console.error("Erro:", erro);
}
