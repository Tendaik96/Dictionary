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

//get heading
const nounHeading = document.getElementById('noun-heading');
const verbHeading = document.getElementById("verb-heading");
const adverbHeading = document.getElementById("adverb-heading");
const adjectiveHeading = document.getElementById("adjective-heading");

// get all horizontal lines
const verbLine = document.getElementById("verb-line");
const adverbLine = document.getElementById("adverb-line");
const adjectiveLine = document.getElementById("adjective-line");
  
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
  

  let meaning = document.querySelector("#meaning");
  meaning.textContent = obj.entry;

   const noun = document.querySelector("#noun");
  noun.textContent = obj.meaning.noun;

  //console.log(noun.textContent)
  if (obj.meaning.noun === "") {
    noun.style.display = "none";
    nounHeading.style.display = "none";
  }

  const verb = document.querySelector("#verb");
  verb.textContent = obj.meaning.verb;

  if (obj.meaning.verb === "") {
    verb.style.display = "none";
    verbHeading.style.display = "none";
    verbLine.style.display = "none";
  }

  const adverb = document.querySelector("#adverb");
  adverb.textContent = obj.meaning.adverb;

  if (obj.meaning.adverb === "") {
    adverb.style.display = "none";
    adverbHeading.style.display = "none";
    adverbLine.style.display = "none";
  }

  const adjective = document.querySelector("#adjective"); 
  adjective.textContent = obj.meaning.adjective;

  if (obj.meaning.adjective === "") {
    adjective.style.display = "none";
    adjectiveHeading.style.display = "none";
    adjectiveLine.style.display = "none";
  }

  //inputSearch.value = ""; 
} 



button.addEventListener("click", () => {
console.log(inputSearch.value)
  let meaning = getDefinition(inputSearch)
  console.log(meaning)
  
 inputSearch.value="";
});

/* if (noun.textContent == undefined || ""){
  noun.style.display = "none";
  nounHeading.style.display = 'none';
 } */