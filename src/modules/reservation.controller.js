import DEFAULT from '../../config/default.js';

const closeModal = () => {
  document.querySelector('body').removeChild(document.querySelector('.popup-container'));
};

const createReservationsMarkup = (reservations) => {
  let markup = '';
  reservations.forEach((reservation, index) => {
    markup += `${reservation.date_start} - ${reservation.date_end}`;
    markup += (index < reservations.length - 1) ? '<br>' : '';
  });
  return markup;
};

const renderReservationPopup = async (e) => {
  const movieId = parseInt(e.target.id.split('_')[1], 10);
  let response = await fetch(`${DEFAULT.MOVE_API_URL}/${movieId}`);
  const movie = await response.json();
  response = await fetch(`${DEFAULT.INVOLVEMENT_API_BASEURL}/reservations?item_id=${movieId}`);
  const reservations = response.ok ? await response.json() : [];

  const reservePopup = document.createElement('div');
  reservePopup.classList.add('popup-container');

  reservePopup.innerHTML = `
                            <div class="reserve-popup">
                              <div class="item-details">
                                <img src=${movie.image.medium} alt="" class="movie-img  "/>
                                <span class="material-symbols-outlined close">close</span>
                                <h2>${movie.name}</h2>
                                <ul>
                                  <li><span class="caption">Premiered:</span> ${movie.premiered}</li>
                                  <li><span class="caption">Rating:</span> ${movie.rating.average}</li>
                                  <li><span class="caption">Runtime:</span> ${movie.averageRuntime}</li>
                                  <li><span class="caption">Genres:</span> ${movie.genres.join(', ')}</li>
                                </ul>
                              </div>
                              
                              <div class="reservations">
                                <h2>Reservations(${reservations.length})</h2>
                                ${createReservationsMarkup(reservations) || 'This movie has no reservation yet'}
                              </div>

                              <form class="add-reservation">
                                <h2>Add a reservation</h2>
                                <input type="text" placeholder="Enter your name" required>
                                <input type="date" required>
                                <input type="date" required>
                                <input type="submit" value="Reserve">
                              </form>
                            </div>
                          
                          `;

  document.querySelector('body').appendChild(reservePopup);

  document.querySelector('.material-symbols-outlined.close').addEventListener('click', closeModal);
};

// const requestReservation = async () => {
//   const data = fetch()
// };

export default renderReservationPopup;