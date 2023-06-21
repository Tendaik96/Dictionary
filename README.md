
# Dictionary app
How to use the app:
go to www.
Here your greeted with a landing page.

the functionalities of this site are very simple and straigh to the point. the first thing you need to do 
1. Choose a word you are want to define and put it in the search box (Please ensure that the word you have entered is correctly spelt otherwise there will be no data rendered).
2. Click the 'Search' button.
3. An infomation box containing the word you searched and further details about that specific word.

### Things to note
The data that is available includes:
- Name of word searched
- Audio pronunciation
- Word pronunciation
- 3 buttons (antonyms, Synonyms and Examples). these button conditionally render depending on if the details are available in the API used.
- Definition section (Noun, Verb, Adverb and Adjective).

The way that the data renders all depends on if the information is available in the API used to create this project. 

## Problems with the app
- If you try to search a few words within a short amount of time, the data will not render. This is not an issue that can be solved by JavaScript; the APIs used can only handle a certain amount of requests within a given time period. To solve this issue, you need to refresh the browser.
- Some words may have more information, but it may not be available within the APIs used.
 

## 🛠 Frontend Techstack
Javascript, HTML, CSS

## 🛠 Backend Techstack
NodeJs, Express


## Future Goals
- Create a database which can save all the words a user has searched.
- Create a Thesaurus app and incorporate it into this app.

Frontend
- https://medium.com/how-tos-for-coders/https-medium-com-kaushalshah1307-get-pseudo-elements-using-javascript-b64c88a96c46
- https://stackoverflow.com/questions/59024693/style-the-audio-html-tag

Backend
- https://rapidapi.com/dpventures/api/wordsapi
- https://rapidapi.com/twinword/api/word-dictionary
- https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9

## Deployment instructions
- https://paragon.ba/en/how-to-deploy-a-mern-application-on-render-com/
- https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/
- https://expressjs.com/en/resources/middleware/cors.html