import DEFAULT from '../../config/default.js';

const postUrl = `${DEFAULT.INVOLVEMENT_API_BASEURL}/comments`;
const getUrl = `${DEFAULT.INVOLVEMENT_API_BASEURL}/comments?item_id=1`;

const commentBtn = document.querySelector('.comment-btn');
const crossBtn = document.querySelector('.comment-cross');
const commentPopup = document.querySelector('.comment-popup');

const hidePopup = () => {
  commentPopup.style.display = 'none';
};

crossBtn.addEventListener('click', hidePopup);

const renderCommentPopup = async (e) => {
  // const movieId = parseInt(e.target.id.split('_')[1], 10);
  // const movie = await fetch(`${DEFAULT.MOVE_API_URL}/${movieId}`);
  const movieCard = e.target.parentElement.parentElement;
  const cardImageUrl = movieCard.firstElementChild.firstElementChild.src;
  const releaseDate = movieCard.querySelector('.premiered').innerText;
  const duration = movieCard.querySelector('.duration').innerText;
  const name = movieCard.querySelector('.movie-name').innerText;
  const likes = movieCard.querySelector('.likes').innerText;

  let movieDescription = '';
  movieDescription += `
      <div class="img-container">
      <img src="${cardImageUrl}" alt="${name}">
      <h1 class="movie-title">${name}</h1>
    </div>
    <div class="movie-details">
      <div class="left-detail">
        <div class="starring">Release Date: ${releaseDate}</div>
        <div class="Quality">Quality: HD</div>
      </div>
      <div class="right-detail">
        <div class="Genre">Duration: ${duration}</div>
        <div class="director">👍${likes}</div>
      </div>
    </div>
  `;
  document.querySelector('.movie-description').innerHTML = movieDescription;
  commentPopup.style.display = 'block';
};

const commentListener = () => {
  const homeCommentBtns = document.querySelectorAll('.home-comment-btn');
  homeCommentBtns.forEach((homeCommentBtn) => {
    homeCommentBtn.addEventListener('click', renderCommentPopup);
  });
};

const addComment = async (data) => {
  const response = await fetch(postUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        item_id: data.item_id,
        username: data.username,
        comment: data.comment,
      },
    ),
  });
  const commentCall = await response.text();
  return commentCall;
};

const getData = async () => {
  const getResponse = await fetch(getUrl);
  const result = await getResponse.json();
  return result;
};

const display = (comments) => {
  let li = '';
  comments.forEach((commentItem) => {
    // removed id temporary.
    li += `
          <li class="comment-detail">
          <span class="date">${commentItem.creation_date}</span>
          <span class="name">${commentItem.username}:</span>
          <span class="commet">${commentItem.comment}</span>
        </li>
    `;
  });
  document.querySelector('.comment-holder').innerHTML = li;
};

const index = (indices) => {
  let sum = 1;
  for (let i = 1; i < indices.length; i += 1) {
    sum += 1;
  }
  document.querySelector('.comment-heading-container').innerHTML = ` <h3 class="comment-heading">Comments(${sum})</h3> `;
};

const insertComment = async () => {
  const insertDom = await getData();
  display(insertDom);
  index(insertDom);
};

commentBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const username = document.querySelector('.name-input').value.trim();
  const comment = document.querySelector('.comment-text').value.trim();
  const itemId = '1';
  if (username !== '' && comment !== '') {
    await addComment({ item_id: itemId, username, comment });
    insertComment();
  }
  document.getElementById('comment-form').reset();
});

// export {addComment, getData, hidePopup, renderCommentPopup}
export {
  addComment, getData, hidePopup, commentListener,
};