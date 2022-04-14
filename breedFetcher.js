const request = require('request');

const fetchBreedDescription = (catBreed, callBack) => {
  const baseURL = "https://api.thecatapi.com/";
  const queryResource = "v1/breeds/search?q=";

  if (!catBreed) return callBack(new Error("Please enter a valid cat breed."), '');

  request(baseURL + queryResource + catBreed, (error, response, body) => {
    if (error) {
      return callBack(error, '');
    }

    if (response.statusCode < 200 || response.statusCode >= 300) {
      return callBack(new Error(response && response.statusCode), '');
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      return callBack(new Error(`Cat breed ${catBreed} does not exist.`), '');
    }

    return callBack(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
