"use strict";

var searchBtn = $('#searchBtn');

function getGameInfo() {
  $("#result").empty();
  var gameSearchQuery = encodeURIComponent($('#searchBox').val());
  var apiKey = 'moby_eRqEEME4024sQrpzT3LVTTmtIkO'; // Replace with your own API key

  fetch("http://localhost:8010/proxy/games?format=normal&api_key=".concat(apiKey, "&title=").concat(gameSearchQuery)).then(function (response) {
    return response.json();
  }).then(function (data) {
    for (var i = 0; i < data.games.length; i++) {
      var result = $('#result');
      var gameTitle = data.games[i].title;
      var gamePoster = data.games[i].sample_cover.thumbnail_image;
      $(result).append("<div id=\"gameBox\" style=\"background-image: url(".concat(gamePoster, "\")>\n                              <div id=\"gameTitle\">").concat(gameTitle, "</div>\n                            </div>"));
    }
  })["catch"](function (error) {
    console.error('Something bad happened!:', error); // handle errors
  });
}

;
/*         console.log("Game Genre: ");
        for (let j = 0; j < (data.games[i].genres).length; j++) {
          let genresName = (data.games[i].genres[j].genre_name);
          console.log(genresName);
        } */

/*         console.log("Game Platforms: ");
        for (let j = 0; j < (data.games[i].platforms).length; j++) {
          let platformsName = (data.games[i].platforms[j].platform_name);
          console.log(platformsName);
        } */