const express = require("express");
const app = express();


app.get("/", (req, res) => {
    //console.log(req.query); //this is the object and this is the 
    //http://localhost:3000/?counter1=2&counter2=5 syntax
    res.send("Hello World !");
})

// /: acts as the wild card
app.get("/:username", (req, res) => {
    let username = req.params.username
    let msg = "this user called " + username;
    res.send(msg);
})

app.post("/createUser", (req, res) => {
    res.send("User Created");
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is Running on port :-", PORT);
})

// Query Params
// there are many type of request like get, put, post, delete but by default 
// get method is called from the browser url 
// you can do everything with the get request but there are consequences of it
