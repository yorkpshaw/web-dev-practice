// MUST RESTART SERVER WHEN YOU CHANGE CODE
// node index.js runs the server
// This download does not include the node_modules folder
// "npm init -y" will start process, skip questions
// REMEMBER TO RUN "npm install" first, to tell NPM to download the needed packages
// "npm i express"

// Request is an object created by Express based upon the incoming HTTP Request
// Response is an object made by Express, both of  which are passed into a callback. Gives us a few methods like res.send


const express = require("express");

// Require express, and then assign it to a function
const app = express();
// Add gives us methods such as:
// Get: Expects the path you are matching, return a callback function
//

// Incoming request ---> Outgoing response
// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     res.send('<h1>This is my webpage!</h1>')
// })
// Can't have an HTTP request that gets more than one response. App.use matches every request

// HTTP req is text info, express parses the incoming HTTP information into an object to pass to app.use
// Response goes to the person who requested the info (the user)
app.get('/', (req, res) => {
    res.send('Welcome to the home page!')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

// The colon designates a path variable to be put in res.send
app.get('/r/:subreddit/:postId', (req, res) => {
    // Request Object
    const { subreddit, postId } = req.params;
    // req.params are the parameter values provided in the URL path
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
    console.log("CAT REQUEST!!!")
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})

// Query Strings
app.get('/search', (req, res) => {
    // req.query is an object containing the property for each query string parameter in the route
    const { q } = req.query;
    //
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    } else {
        res.send(`<h1>Search results for: ${q}</h1>`)
    }
})

// The star/asterisk represents everything
// Goes at the bottom in case other routes fail as routes are handled in order and can only happen once
// Good for handling any unknown paths
app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})

// /cats => 'meow'
// /dogs => 'woof'
// '/'

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})
