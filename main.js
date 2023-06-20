

// capture search box
let inputSearch = document.querySelector("#searchBox");
/* inputSearch.addEventListener("change", handleChange); */

// capture button
const button = document.querySelector("#button");

//get phonetic
const phonetic = document.querySelector("#phonetic");

// get all paragraph by id
let meaning = document.getElementById("meaning");
let noun = document.getElementById("noun");
let verb = document.getElementById("verb");
let adverb = document.getElementById("adverb");
let adjective = document.getElementById("adjective");

//get heading
const nounHeading = document.getElementById("noun-heading");
const verbHeading = document.getElementById("verb-heading");
const adverbHeading = document.getElementById("adverb-heading");
const adjectiveHeading = document.getElementById("adjective-heading");

// get all horizontal lines
const verbLine = document.getElementById("verb-line");
const adverbLine = document.getElementById("adverb-line");
const adjectiveLine = document.getElementById("adjective-line");

// his info section
const info = document.getElementById("info");
const options = document.getElementById("options");
const initialDisplay = document.getElementById("initial-display");
const body = document.querySelector("body");
const input = document.querySelector("input");
const dictionary = document.getElementById("dictionary");

//detail buttons display
const antonymsDetail = document.getElementById("antonyms-detail");
const synonymsDetail = document.getElementById("synonyms-detail");
const examplesDetail = document.getElementById("example-detail");

// antonyms details
const antonymsHeading = document.getElementById("antonyms-heading");
const antonyms = document.getElementById("antonyms");
const antonymsBtn = document.getElementById("antonyms-btn");

// synonyms details
const synonymsHeading = document.getElementById("synonyms-heading");
const synonyms = document.getElementById("synonyms");
const synonymsBtn = document.getElementById("synonyms-btn");

// example details
const examplesHeading = document.getElementById("example-heading");
const examples = document.getElementById("example");
const examplesBtn = document.getElementById("example-btn");

antonymsDetail.style.display = "none";
synonymsDetail.style.display = "none";
examplesDetail.style.display = "none";

//test if the button works
/* button.addEventListener("click", () => {
   console.log("clicked")
}); */

if (meaning.textContent == "") {
  info.style.display = "none";
  initialDisplay.style.margin = "auto 0";
  body.style.minHeight = "100vh";
  input.style.width = "100%";
  antonymsDetail.style.display = "none";
  synonymsDetail.style.display = "none";
  examplesDetail.style.display = "none";
}

//check input value in console - value prints in console

// get value from input and use it to search API
// button.addEventListener("click", (inputSearch) => {
//   getDefinition(inputSearch);
// });

const audio = document.querySelector("audio");
/* function audioDisplay() {
  if(audio.src == "" || null || undefined) {
  audio.style.display = "none";
}
}

audioDisplay() */

async function getDefinition(word) {
  const response = await fetch(
    `https://dictionary-backend.onrender.com/definition/${word.value}`
  );

  const data = await response.json();
  //console.log("this is data", data);

  const obj = await JSON.parse(data.payload);
  //console.log("this is obj", obj.result_msg);

    console.log(obj)

  let meaning = document.querySelector("#meaning");
  if (obj.entry !== "" && obj.result_msg !== "Entry word not found") {
    meaning.textContent = obj.entry;
  } else {
    meaning.textContent = input.value
      info.style.display = "none";
    initialDisplay.style.margin = "auto 0";
    body.style.setProperty("--ccAfter", "Animation 50s linear infinite");
    setTimeout(()=>{alert("This word does not exist. Please check the spelling and try again")} , 10)
  }

  //NOUN
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
  } else if (
    obj.meaning.verb === "" &&
    obj.meaning.adverb === "" &&
    obj.meaning.noun === ""
  ) {
    adjectiveLine.style.display = "none";
  } else {
    adjective.style.display = "block";
    adjectiveHeading.style.display = "block";
    adjectiveLine.style.display = "block";
  }

  //inputSearch.value = "";
}

async function getAudio(word) {
  let response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`,
    {
      headers: { accept: "application/json" },
    }
  );
  const data = await response.json();

  //console.log(data[0].phonetics[0].audio);
  //console.log(data[0]);

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
}

button.addEventListener("click", (e) => {
  console.log(inputSearch.value);

  let firstAPI = getDefinition(inputSearch);
  let audioAPI = getAudio(inputSearch);
  let antonymsAPI = getAntonyms(inputSearch);
  let synonmysAPI = getSynonym(inputSearch);
  let examplesAPI = getExamples(inputSearch);

  console.log("look here", firstAPI);

  if (inputSearch.value == "") {
    info.style.display = "none";
    initialDisplay.style.margin = "auto 0";
    body.style.setProperty("--ccAfter", "Animation 50s linear infinite");
    //////////////////////////COME BACK HERE
  } else if (firstAPI !== "") {
    initialDisplay.style.margin = "8vh 0 5vh 0";
    info.style.display = "block";
    e.preventDefault();

    body.style.setProperty("--ccAfter", "0");
  }

  inputSearch.value = "";
});

/* if (noun.textContent == undefined || ""){
  noun.style.display = "none";
  nounHeading.style.display = 'none';
 } */

async function getAntonyms(word) {
  const response = await fetch(
    `https://dictionary-backend.onrender.com/antonym/${word.value}`
  );

  const data = await response.json();
  //console.log("this is data", data);

  const obj = await JSON.parse(data.payload.antonym);
  console.log("this is obj", obj.word);

  // condition needs to be outside
  if (obj.antonyms.length == 0) {
    antonymsBtn.style.display = "none";
  } else {
    antonymsBtn.style.display = "block";
    antonymsBtn.addEventListener("click", () => {
      if (antonymsDetail.style.display === "none") {
        antonymsDetail.style.display = "flex";

        if (obj.antonyms.length !== 0) {
          antonyms.textContent = obj.antonyms.join(", ");
          antonymsBtn.style.display = "block";
          antonymsBtn.style.backgroundImage =
            "linear-gradient(rgba(243, 12, 32, 1), rgba(210, 10, 228, 1))";
        }
      } else {
        antonymsDetail.style.display = "none";
        antonymsBtn.style.backgroundImage = 'none';
      }
    });
  }
}

async function getSynonym(word) {
  const response = await fetch(
    `https://dictionary-backend.onrender.com/synonym/${word.value}`
  );

  const data = await response.json();
  //console.log("this is data", data);

  const obj = await JSON.parse(data.payload);
  console.log("this is objjlll", obj.word);

  if (obj.synonyms.length == 0) {
    synonymsBtn.style.display = "none";
  } else {
    synonymsBtn.style.display = "block";
    synonymsBtn.addEventListener("click", () => {
      if (synonymsDetail.style.display === "none") {
        synonymsDetail.style.display = "flex";

        if (obj.synonyms.length !== 0) {
          synonyms.textContent = obj.synonyms.join(", ");
          synonymsBtn.style.display = "block";
          synonymsBtn.style.backgroundImage =
            "linear-gradient(rgba(243, 12, 32, 1), rgba(210, 10, 228, 1))";
        }
      } else {
        synonymsDetail.style.display = "none";
        synonymsBtn.style.backgroundImage =
          "none";
      }
    });
  }
}

async function getExamples(word) {
  const response = await fetch(
    `https://dictionary-backend.onrender.com/examples/${word.value}`
  );

  const data = await response.json();
  //console.log("this is data", data);

  const obj = await JSON.parse(data.payload);
  console.log("this is objj123", obj.word);

  if (obj.examples.length == 0) {
    examplesBtn.style.display = "none";
  } else {
    examplesBtn.style.display = "block";
    examplesBtn.addEventListener("click", () => {
      if (examplesDetail.style.display === "none") {
        examplesDetail.style.display = "flex";

        if (obj.examples.length !== 0) {
          examples.textContent = obj.examples.join(" || ");
          examplesBtn.style.display = "block";
          examplesBtn.style.backgroundImage =
            "linear-gradient(rgba(243, 12, 32, 1), rgba(210, 10, 228, 1))";
        }
      } else {
        examplesDetail.style.display = "none";
        examplesBtn.style.backgroundImage = 'none'
      }
    });
  }
}
