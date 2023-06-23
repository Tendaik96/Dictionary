
# Dictionary app
How to use the app:
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
- The first problem relates to the rendering of data when multiple word searches are performed quickly. Due to limitations in the APIs used by the app, there is a restriction on the number of requests that can be handled within a specific time period. Consequently, if you search for several words in a short amount of time, some of the data may fail to render. The best solution to this issue is to refresh the browser and search for the same word again.
- The second problem pertains to the availability of information for certain words. Although the app may have the capability to display more detailed information for certain words, this additional data may not be accessible through the APIs employed by the app. Essentially, the app is limited by the information provided by the APIs, and as a result, some words may not have the desired level of detail or additional information.

This is a common limitations or issues that can occur in app's relying on external APIs for data retrieval and display.

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