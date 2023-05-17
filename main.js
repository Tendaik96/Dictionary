// capture search box
let inputSearch = document.querySelector("#searchBox");

/* inputSearch.addEventListener("change", handleChange); */

// capture button
const button = document.querySelector("#button");

//get phonetic
const phonetic = document.querySelector('#phonetic')

// get all paragraph by id
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

// his info section
const info = document.getElementById('info');
const initialDisplay = document.getElementById("inital-display");
const body = document.querySelector('body');
const input = document.querySelector('input')
const dictionary = document.getElementById('dictionary')

  
//test if the button works
/* button.addEventListener("click", () => {
   console.log("clicked")
}); */
if (meaning.textContent == "") {
  info.style.display = 'none';
  
  
  initialDisplay.style.margin = "auto 0";
  // initialDisplay.style.transitionProperty = "initialDisplay.style.margin";
  // initialDisplay.style.transitionDuration = '1s';
  // initialDisplay.style.transitionTimingFunction = 'ease-in';
  body.style.minHeight = '100vh';
  input.style.width = '100%';
  //input.style.fontSize = '20px'
  //dictionary.style.fontSize = '100px'
  
} else {
  
}
console.log(meaning)


//check input value in console - value prints in console

// get value from input and use it to search API
// button.addEventListener("click", (inputSearch) => {
//   getDefinition(inputSearch);
// });

const audio = document.querySelector('audio');
/* function audioDisplay() {
  if(audio.src == "" || null || undefined) {
  audio.style.display = "none";
}
}

audioDisplay() */


async function getDefinition(word) {

  const response = await fetch(`http://localhost:3000/definition/${word.value}`);

  const data = await response.json();
  //console.log("this is data", data);

  const obj = await JSON.parse(data.payload);
  //console.log("this is obj", obj);

  let meaning = document.querySelector("#meaning");
  meaning.textContent = obj.entry;

   const noun = document.querySelector("#noun");
  noun.textContent = obj.meaning.noun;

  //console.log(noun.textContent)
  if (obj.meaning.noun === "") {
    noun.style.display = "none";
    nounHeading.style.display = "none";
  } else {
    noun.style.display = "block";
    nounHeading.style.display = "block";
  }

  const verb = document.querySelector("#verb");
  verb.textContent = obj.meaning.verb;

  if (obj.meaning.verb === "") {
    verb.style.display = "none";
    verbHeading.style.display = "none";
    verbLine.style.display = "none";
  } else {
    verb.style.display = "block";
    verbHeading.style.display = "block";
    verbLine.style.display = "block";
  }

  const adverb = document.querySelector("#adverb");
  adverb.textContent = obj.meaning.adverb;

  if (obj.meaning.adverb === "") {
    adverb.style.display = "none";
    adverbHeading.style.display = "none";
    adverbLine.style.display = "none";
  } else {
    adverb.style.display = "block";
    adverbHeading.style.display = "block";
    adverbLine.style.display = "block";
  }

  const adjective = document.querySelector("#adjective"); 
  adjective.textContent = obj.meaning.adjective;

  if (obj.meaning.adjective === "") {
    adjective.style.display = "none";
    adjectiveHeading.style.display = "none";
    adjectiveLine.style.display = "none";
  } else if (obj.meaning.verb === "" && obj.meaning.adverb === "" && obj.meaning.noun === "") {
    adjectiveLine.style.display = "none";
  } else {
    adjective.style.display = "block";
    adjectiveHeading.style.display = "block";
    adjectiveLine.style.display = "block";
  }

  //inputSearch.value = ""; 
} 

async function getDetails(word) {
  let response = await fetch(
    `http://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`,
    {
      headers: { accept: "application/json" },
    }
  );
  const data = await response.json();

  //console.log(data[0].phonetics[0].audio);
  console.log(data[0]);

  phonetic.textContent = data[0].phonetic;
  let audioLocation = data[0].phonetics[0].audio;

  // tried to save in variable but app doesnt work when trying to yuse variable in if statements
  //const secAudioLocation = data[0].phonetics[1].audio;
  
  //show audio if found
  if (audioLocation !== "") {
    audio.style.display = "block";
    audio.src = audioLocation;
  } else if (data[0].phonetics[1].audio !== "" && audioLocation == "") {
    audio.style.display = "block";
    audio.src = data[0].phonetics[1].audio;
  } else if (data[0].phonetics[1].audio !== "" && audioLocation !== "") {
    audio.style.display = "none";
  } 

    console.log("....", audio);
}



button.addEventListener("click", (e) => {
  e.preventDefault
console.log(inputSearch.value)
  let firstAPI = getDefinition(inputSearch)
  let secondAPI = getDetails(inputSearch);

  if (firstAPI !== '' && secondAPI !== '') {
    initialDisplay.style.margin = "8vh 0 0 0";
    info.style.display = "block";
    
    
    //initialDisplay.style.transition ="1s";
  }

  


  
  
    //console.log(meaning)
    //console.log("this is details", details);

    inputSearch.value = "";
});

/* if (noun.textContent == undefined || ""){
  noun.style.display = "none";
  nounHeading.style.display = 'none';
 } */