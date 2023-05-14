// capture search box
const inputSearch = document.querySelector("#searchBox");

/* inputSearch.addEventListener("change", handleChange); */

// capture button
const button = document.querySelector("#button");

//test if the button works
/* button.addEventListener("click", () => {
   console.log("clicked")
}); */

//check input value in console - value prints in console
button.addEventListener("click", () => {
  console.log(inputSearch.value)
 // inputSearch.value="";
});

// get value from input and use it to search API
button.addEventListener("click", getDefinition);

async function getDefinition(inputSearch) {

  let response = await fetch(`http://localhost:3000/definition/${inputSearch.value}`,)

  let data = await response.json();
  console.log("this is data", data)

 /*  const meaning = document.querySelector("#meaning");
  //meaning.textContent = data.entry;

  const noun = document.querySelector("#noun");
  //noun.textContent = data.meaning.noun;

  const verb = document.querySelector("#verb");
  //verb.textContent = data.meaning.verb;

  const adverb = document.querySelector("#adverb");
  //adverb.textContent = data.meaning.adverb;

  const adjective = document.querySelector("#adjective");
  //adjective.textContent = data.meaning.adjective; */

  //inputSearch.value = ""; 
} 

