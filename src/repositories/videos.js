import config from "../config";

const URL_VIDEOS = `${config.API_URL}/videos`;

function insert(values) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  };

  return fetch(URL_VIDEOS, requestOptions).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();
      return resposta;
    }
    throw new Error("Não foi possível carregar os dados do servidor :(");
  });
}

export default {
  insert,
};
