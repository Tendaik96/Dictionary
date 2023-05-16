// capture search box
let inputSearch = document.querySelector("#searchBox");

/* inputSearch.addEventListener("change", handleChange); */

// capture button
const button = document.querySelector("#button");

// get all headings by id

let meaning = document.getElementById('meaning')
let noun = document.getElementById("noun");
let verb = document.getElementById("verb");
let adverb = document.getElementById("adverb");
let adjective = document.getElementById("adjective");
  
//test if the button works
/* button.addEventListener("click", () => {
   console.log("clicked")
}); */

//check input value in console - value prints in console

// get value from input and use it to search API
// button.addEventListener("click", (inputSearch) => {
//   getDefinition(inputSearch);
// });

async function getDefinition(word) {

  const response = await fetch(`http://localhost:3000/definition/${word.value}`);

  const data = await response.json();
  console.log("this is data", data)

  const obj = await JSON.parse(data.payload)
  console.log("this is obj", obj)

  const meaning = document.querySelector("#meaning");
  meaning.textContent = obj.entry;

   const noun = document.querySelector("#noun");
  noun.textContent = obj.meaning.noun;

  const verb = document.querySelector("#verb");
  verb.textContent = obj.meaning.verb;

  const adverb = document.querySelector("#adverb");
  adverb.textContent = obj.meaning.adverb;

  const adjective = document.querySelector("#adjective"); 
  adjective.textContent = obj.meaning.adjective;

  //inputSearch.value = ""; 
} 

button.addEventListener("click", () => {
console.log(inputSearch.value)
  let meaning = getDefinition(inputSearch)
  console.log(meaning)
  
 inputSearch.value="";
});