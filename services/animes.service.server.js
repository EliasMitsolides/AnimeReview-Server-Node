// \/\/ This represents an arbitrarily complex JSON object w/ 
    //  embedded objects and IDs
// const animes = [
//     {_id: '1234', title: "anime 1"},
//     {_id: '2345', title: "anime 2"},
//     {_id: '3456', title: "anime 3"}
// ]
// 15) Hard-coded arrays (like above) are better organized into their own json files
const animes = require('./animes.json') 


findAllAnimes = () => animes
findAnimeByID = (animeID) => 
    animes.find(anime => anime._id === animeID)

// 13) With these functions, export them via module.exports for 'require' in diff files
module.exports = {
    findAllAnimes, // w/ ES6 we can abbreviate so no typing twice
    findAnimeByID: findAnimeByID   // of course the older way still works
}