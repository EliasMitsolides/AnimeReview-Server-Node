const animesService = require('../services/animes.service.server')

// 5) This controller file would otherwise go in server.js

// 6) An exportable anonymous function that gets the app instance passed into it
// Node's export = 'module.exports'...Node's import = "require('file/path')"
// 14) A webservice is exposed through the controller. The service retrieves and act on 
//  data to fulfill what controller needs to satisfy requests.
module.exports = function(app){

    // 1) \/\/ This represents an arbitrarily complex JSON object w/ 
    //  embedded objects and IDs
    // 12) This n data that is accessed/maniped & the direct accessing/manip functions 
    //  should reside in Services files
    // const animes = [
    //     {_id: '1234', title: "anime 1"},
    //     {_id: '2345', title: "anime 2"},
    //     {_id: '3456', title: "anime 3"}
    // ]

    // 7) A logical URL for front end to use
    //  following restful api naming conventions uses '/api/'
    app.get('/animes', (req, res) => 
        res.send(animesService
            .findAllAnimes())
    )

    // 8) Moving endpoints so that they're not all in one massssive file
    //Endpoints act as a HTTP controlling, binding URL events from client to functions here

    //\/\/
    // 9) ':' colon in URLs follows some identifiable path variable to be parsed out
    // All info from client, path, URL, URL portions, cookies, headers, JSONs
    //  accessible through the 'req' object in the argument
    // The identifiable variables in URLs after ":id" are mapped in req.params['id']
    app.get('/animes/:animeID', (req, res) => 
        // 10) This responds as JSON
        // res.send(animes.find(anime => anime._id === req.params['animeID']))
        // This responds as JSON but validates for JSON syntax
        res.json(animesService
            .findAnimeByID(req.params['animeID'])
        )
    )
        //res.json(animes.find(anime => anime._id === req.params['animeID'])) // w/ no Service file
        // 11) Controller responsibility shouldn't be accessing/maniping data n models
        //  That functionality should be Services
    ////)

}

