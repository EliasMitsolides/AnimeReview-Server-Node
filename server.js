const express = require('express')
const app = express() // Express makes whats possible in NodeJS easier, server making, router handling, etc.



// require('./controllers/animes.controller.server')(app) //syntax if exported function not used anywhere else
// 3) A controller to store/categorize endpoints taking URL events&retrieving DB data
const animesController = require('./controllers/animes.controller.server')
// 10) This controller exported a function, we call the controller and pass in
//  the instance of the app that the function operates on
animesController(app)

app.get('/', (req, res) => res.send('hellooooo!'))

app.get('/hello', (req, res) => res.send('hellooooo!'))

// 4) The argument is which local host address this will reside in
// 'app.listen(3004)' means URL hit must start with 'http://localhost:3004/'
app.listen(3004)
//app.listen(3004)