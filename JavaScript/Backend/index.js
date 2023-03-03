const express = require("express");
const {getDefinition} = require("./definitions")

//to set up our server - by calling express we create a application that allows us to set up our entire server
const app = express();

//get request, it take 2 arguements - the path and a function
app.get("/", async (req, res) => {
  let defined = await getDefinition(req.params)
});

// app is listening to port 3000 - when no routes are set up the web page should say cannot GET
app.listen(3000, () => {
  console.log("You are listening on PORT 3000")
});
