"use strict";

function getGameInfo() {
  var apiKey = 'moby_eRqEEME4024sQrpzT3LVTTmtIkO'; // Replace with your own API key

  var gameSearchQuery = 'Lightfall'; // Change this to whichever game title you want to retrieve info for

  fetch("https://api.mobygames.com/v1/games?format=normal&api_key=".concat(apiKey, "&title=").concat(gameSearchQuery)).then(function (response) {
    return response.json();
  }).then(function (data) {
    for (var i = 0; i < data.games.length; i++) {
      var gameTitle = data.games[i].title;
      console.log("Game Title: ", gameTitle);
      console.log("Game Genre: ");

      for (var j = 0; j < data.games[i].genres.length; j++) {
        var genresName = data.games[i].genres[j].genre_name;
        console.log(genresName);
      }

      console.log("Game Platforms: ");

      for (var _j = 0; _j < data.games[i].platforms.length; _j++) {
        var platformsName = data.games[i].platforms[_j].platform_name;
        console.log(platformsName);
      }

      console.log("____________________");
    }
  })["catch"](function (error) {
    console.error('Something bad happened!:', error); // handle errors
  });
}

getGameInfo();