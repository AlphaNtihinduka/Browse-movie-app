import counter from './Home.counter.js'

describe("Home page counter method", () => {
    test('[] should return 0', () => {
        // TODO: AAA

        //- TODO: ARRANGE
        let input = [];

        //- TODO: ACT
        let output = counter(input);

        //- TODO: ASSERT
        expect(output).toBe(0);

    });

    test('[movie-1,movie-2] should return 2', () => {
        // TODO: AAA

        //- TODO: ARRANGE
        let input = ['movie-1', 'movie-2'];

        //- TODO: ACT
        let output = counter(input);

        //- TODO: ASSERT
        expect(output).toBe(2);

    })
    test('[movie-1,movie-2,movie-3,movie-4,movie-5] should return 5', () => {
        // TODO: AAA

        //- TODO: ARRANGE
        let input = [];

        //- TODO: ACT
        let output = counter(input);

        //- TODO: ASSERT
        expect(output).toBe(0);

    });
});