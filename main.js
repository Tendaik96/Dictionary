// capture search box
const inputSearch = document.querySelector("#searchBox");
//capture para
const para = document.querySelector("#definition");

/* inputSearch.addEventListener("change", handleChange); */
/* function handleChange(event) {
  let textInput = event.target.value;
  para.textContent = textInput;
} */

// capture button
const button = document.querySelector("#button");
//test if the button works
/* button.addEventListener("click", () => {
   console.log("clicked")
}); */

//check input value in console - value prints in console
/* button.addEventListener("click", () => {
  console.log(inputSearch.value)
  inputSearch.value="";
}); */

// get value from input and use it to search API
button.addEventListener("click", getDefinition);

async function getDefinition() {
  /* const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "twinword-word-graph-dictionary.p.rapidapi.com",
    },
  };

  let response = await fetch(
    `https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=${inputSearch.value}`,
    options
  ); */
  let data = await response.json();
  console.log("this is data", data);
  /* .catch((err) => console.error(err));  */

  const meaning = document.querySelector("#meaning");
  meaning.textContent = data.entry;

  const noun = document.querySelector("#noun");
  noun.textContent = data.meaning.noun;

  const verb = document.querySelector("#verb");
  verb.textContent = data.meaning.verb;

  const adverb = document.querySelector("#adverb");
  adverb.textContent = data.meaning.adverb;

  const adjective = document.querySelector("#adjective");
  adjective.textContent = data.meaning.adjective;

  inputSearch.value = "";
}
