import { getMovieHandler, renderMovieHandler } from '../../modules/movies.controller';
import '../css/style.css';
const movieLists = document.querySelector('.List');
(async() => {

    let movieListData = await getMovieHandler();
    movieListData.length < 0 ?
        // ? could use spinner component here when fetching data 
        movieLists.innerHTML = 'loading' :
        movieLists.innerHTML = renderMovieHandler(movieListData);

})();