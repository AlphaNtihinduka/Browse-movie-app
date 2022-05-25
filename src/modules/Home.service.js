import {
  getMovieHandler,
  nextPage,
  prevPage,
  renderMovieHandler,
  renderPaginationHandler,
  set,
  jump,
} from './Home.controller.js';
import { postLike } from './Likes.js';
import reservations from './reservation.service.js';

const movieLists = document.querySelector('.List');
const pagination = document.querySelector('.Pagination');

const HomePage = async () => {
  const movieListData = await getMovieHandler();
  if (movieListData.length < 0) {
    // ? could use spinner component here when fetching data
    movieLists.innerHTML = 'loading';
  } else {
    movieLists.innerHTML = renderMovieHandler(movieListData);
  }
  pagination.innerHTML = renderPaginationHandler(movieListData);
  // - TODO: attach event listner to Like button

  const likeButtons = document.querySelectorAll('.material-symbols-outlined');
  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', (event) => {
      likeButton.classList.add('red');
      // - TODO: also increment in the UI
      postLike(event.target.id)
        .then(() => {
          window.location.reload();
        });
    });
  });

  reservations();

  // - TODO: end
  const previousButton = document.querySelector('.previousPage');
  const nextButton = document.querySelector('.nextPage');
  previousButton.addEventListener('click', prevPage);
  nextButton.addEventListener('click', nextPage);
  const paginationButton = document.querySelectorAll('.selector');
  paginationButton.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.target.classList.add('.active');
      jump(event.target.id);
      set('selectedPageNumber', event.target.id);
      window.location.reload();
    });
  });
};
export default HomePage;