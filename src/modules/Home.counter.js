export const homeMovieCounter = () => {
    const movieCounter = document.querySelectorAll('.card');
    const movieItems = movieCounter.length;
    const displayMovieCounter = document.querySelector('#movie-counter');
    displayMovieCounter.innerHTML = `Movies(${movieItems})`;
}