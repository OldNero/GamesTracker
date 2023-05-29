const searchBtn = $('#searchBtn');

function getGameInfo() {

  $("#result").empty();

  const gameSearchQuery = encodeURIComponent($('#searchBox').val());
  const apiKey = 'moby_eRqEEME4024sQrpzT3LVTTmtIkO'; // Replace with your own API key

  fetch(`http://localhost:8010/proxy/games?format=normal&api_key=${apiKey}&title=${gameSearchQuery}`)
    .then(response => response.json())
    .then(data => {

      for (let i = 0; i < (data.games).length; i++) {

        const result = $('#result');
        let gameTitle = (data.games[i].title);
        let gamePoster = (data.games[i].sample_cover.thumbnail_image);

        $(result).append(`<div id="gameBox" style="background-image: url(${gamePoster}")>
                              <div id="gameTitle">${gameTitle}</div>
                            </div>`);

      }

    })

    .catch(error => {
      console.error('Something bad happened!:', error); // handle errors

    })

};


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