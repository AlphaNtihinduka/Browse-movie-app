// import DEFAULT from '../../config/default';

const renderReservationPopup = (e) => {
  const movieId = parseInt(e.target.id.split('_')[1], 10);
  const tooltip = e.target.parentElement.parentElement;
  const imgURL = tooltip.querySelector('.movie-img').src;
  const label = tooltip.querySelector('label').innerText;

  const reservePopup = document.createElement('div');
  reservePopup.classList.add('popup-container');

  reservePopup.innerHTML = `
                          <div class="reserve-popup">
                          <img src=${imgURL} alt="" class="movie-img  "/>
                          <Label>${label}</Label>

                          <p>Reservations</p>
                          </div>
                          `;

  document.querySelector('body').appendChild(reservePopup);
};

// const requestReservation = async () => {
//   const data = fetch()
// };

export default renderReservationPopup;