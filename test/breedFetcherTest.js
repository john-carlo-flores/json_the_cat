const { fetchBreedDescription } = require('../breedFetcher');
const assert = require('chai').assert;

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed cat breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, desc) => {
      assert.isNull(error);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.strictEqual(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error object and null description for an invalid breed cat breed, via callback', (done) => {
    fetchBreedDescription('Tactile', (error, desc) => {
      assert.isNotNull(error);

      assert.isNull(desc);

      done();
    });
  });
});