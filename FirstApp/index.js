// MUST RESTART SERVER WHEN YOU CHANGE CODE
// node index.js runs the server
// This download does not include the node_modules folder
// "npm init -y" will start process, skip questions
// REMEMBER TO RUN "npm install" first, to tell NPM to download the needed packages
// "npm i express"

const express = require("express");

// Require express, and then assign it to a function
const app = express();

// Incoming request ---> Outgoing response
// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     res.send('<h1>This is my webpage!</h1>')
// })

// HTTP req is text info, express parses the incoming HTTP information into an object to pass to app.use
app.get('/', (req, res) => {
    res.send('Welcome to the home page!')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    } else {
        res.send(`<h1>Search results for: ${q}</h1>`)
    }
})

app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})

// /cats => 'meow'
// /dogs => 'woof'
// '/'

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})
