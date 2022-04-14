const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    return console.log('Error fetch details:', error);
  }
  
  console.log(desc);
});