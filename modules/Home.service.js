import { getMovieHandler, nextPage, prevPage, renderMovieHandler, renderPaginationHandler, set, get, jump } from './Home.controller';
const movieLists = document.querySelector('.List');
const pagination = document.querySelector('.Pagination');

const HomePage = async() => {
    get('selectedPageNumber') ? '' : set('selectedPageNumber', 1);
    let movieListData = await getMovieHandler();
    movieListData.length < 0 ?
        // ? could use spinner component here when fetching data 
        movieLists.innerHTML = 'loading' :
        movieLists.innerHTML = renderMovieHandler(movieListData);
    pagination.innerHTML = renderPaginationHandler(movieListData);
    let previousButton = document.querySelector('.previousPage');
    let nextButton = document.querySelector('.nextPage');
    previousButton.addEventListener('click', prevPage);
    nextButton.addEventListener('click', nextPage);
    let paginationButton = document.querySelectorAll('.selector');
    // document.querySelector(`.selector #[id=${(get('selectedPageNumber'))}]`).classList.add('.active')
    paginationButton.forEach(element => {
        element.addEventListener('click', (event) => {
            event.target.classList.add('.active');
            jump(event.target.id);
            set('selectedPageNumber', event.target.id);
            window.location.reload();
        })
    })

}
export default HomePage;