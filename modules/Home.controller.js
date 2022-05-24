import defaultConfig from '../config/default.js';

export const getMovieHandler = async () => {
  try {
    const response = await fetch(defaultConfig.MOVE_API_URL);
    const movieListsJson = await response.json();
    return movieListsJson;
  } catch (error) {
    throw new Error(error);
  }
};

// - TODO: SET AND GET IN LOCAL STORAGE
export const get = (key) => JSON.parse(localStorage.getItem(key));
export const set = (key, value) => localStorage.setItem(key, JSON.stringify(value));
// - TODO: SET AND GET CURRENT ACTIVE DATA
const currentData = (data) => {
  const currentPage = get('currentPage') || 1;
  const begin = (currentPage - 1) * defaultConfig.PAGINATION_ITEM_PER_PAGE;
  const end = begin + defaultConfig.PAGINATION_ITEM_PER_PAGE;
  return data.slice(begin, end);
};

export const paginationHandler = (movieList) => {
  const maxPage = Math.ceil(movieList.length / defaultConfig.PAGINATION_ITEM_PER_PAGE);
  set('maxPage', maxPage);
  return maxPage;
};

export const renderMovieHandler = (Database) => currentData(Database).map((movie) => (
  ` <div class="tooltip">
        <div class="card" id=${movie.id}>
        <a href=${movie.officialSite}><img src=${movie.image.medium} alt="" /></a>
        <div class="container">
        <div class="card-header">
            <Label>${movie.name}</Label>
            <span class="material-symbols-outlined">
            favorite 
            </span>
            </div>
        <ul>
            <li>${movie.premiered}</li>
            <li>${movie.averageRuntime} min</li>
            <li>0 Likes</li>
            </ul>
            <button id=${movie.id}>Comment</button>
            <button id=${movie.id}>Reservation</button>
            </div>
    </div>
  <span class="tooltiptext">${JSON.stringify(movie.summary)}</span>
</div>`
)).join(' ');

export const renderPaginationHandler = (ListOfmovies) => (`<div class="pagination">
    <a href="#" class="previousPage">&laquo;</a>
    ${new Array(paginationHandler(ListOfmovies)).fill(0).map((page, index) => `<a href="#" class="selector" id=${index + 1}>${index + 1}</a>`).join(' ')}
    <a href="#" class="nextPage">&raquo;</a>
    </div>`);

const setCurrentPage = (currentPage) => set('currentPage', currentPage.toString());

// - TODO: NAVIGATION FOR PAGINATION
export const nextPage = () => setCurrentPage(Math.min(get('currentPage') + 1, get('maxPage')));
export const prevPage = () => setCurrentPage(Math.max(get('currentPage') - 1, 1));
export const jump = (page) => {
  const pageNumber = Math.max(1, page);
  setCurrentPage(Math.min(pageNumber, get('maxPage')));
};