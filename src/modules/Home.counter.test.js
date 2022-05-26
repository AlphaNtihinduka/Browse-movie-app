const counter = require('./Home.counter');

test('[movie-1,movie-2] should return 2', () => {

    expect(counter([1, 2])).toBe(2);

})