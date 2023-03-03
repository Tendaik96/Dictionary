require("dotenv").config({path: "../.env"});
console.log(process.env.API_KEY);

export default async function getDefinition(input) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "twinword-word-graph-dictionary.p.rapidapi.com",
    },
  };

  let response = await fetch(
    `https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=${input}`,
    options
  );
  let data = await response.json();
  console.log("this is data", data);
}
getDefinition();
