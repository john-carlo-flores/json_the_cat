const request = require('request');

const fetchBreedDescription = (catBreed) => {
  const baseURL = "https://api.thecatapi.com/";
  const queryResource = "v1/breeds/search?q=";

  if (!catBreed) return console.log("Error: Please enter a valid cat breed.");

  request(baseURL + queryResource + catBreed, (error, response, body) => {
    if (error) {
      return console.log(`Error: ${error}`);
    }

    if (response.statusCode < 200 || response.statusCode >= 300) {
      return console.log('statusCode:', response && response.statusCode);
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      return console.log(`Cat breed ${catBreed} does not exist.`);
    }

    console.log(data[0].description);
  });
};

fetchBreedDescription(process.argv[2]);
