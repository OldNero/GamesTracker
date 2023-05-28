function getGameInfo() {

  const apiKey = 'moby_eRqEEME4024sQrpzT3LVTTmtIkO'; // Replace with your own API key
  const gameSearchQuery = 'Lightfall'; // Change this to whichever game title you want to retrieve info for

  fetch(`https://api.mobygames.com/v1/games?format=normal&api_key=${apiKey}&title=${gameSearchQuery}`)
    .then(response => response.json())
    .then(data => {

      for (let i = 0; i < (data.games).length; i++) {
        let gameTitle = (data.games[i].title);
        console.log("Game Title: ", gameTitle);

        console.log("Game Genre: ");
        for (let j = 0; j < (data.games[i].genres).length; j++) {
          let genresName = (data.games[i].genres[j].genre_name);
          console.log(genresName);
        }

        console.log("Game Platforms: ");
        for (let j = 0; j < (data.games[i].platforms).length; j++) {
          let platformsName = (data.games[i].platforms[j].platform_name);
          console.log(platformsName);
        }
        console.log("____________________")
      }

    })

    .catch(error => {
      console.error('Something bad happened!:', error); // handle errors

    })

}

getGameInfo()
