const express = require('express')
const app = express()

// \/\/ This represents an arbitrarily complex JSON object w/ 
//  embedded objects and IDs
const animes = [
    {_id: '1234', title: "anime 1"},
    {_id: '2345', title: "anime 2"},
    {_id: '3456', title: "anime 3"}
]


//a logical URL for front end to use
//following restful api naming conventions uses '/api/'
app.get('/animes', (req, res) => res.send(animes))

app.get('/', (req, res) => res.send('hellooooo!'))

app.get('/hello', (req, res) => res.send('hellooooo!'))

//The argument is which local host address this will reside in
// 'app.listen(3004)' means URL hit must start with 'http://localhost:3004/'
app.listen(3004)
//app.listen(3004)