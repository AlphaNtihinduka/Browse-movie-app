const postUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/m7YKVpMPjxNMTHAHFroS/comments";
const getUrl =  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/m7YKVpMPjxNMTHAHFroS/comments?item_id=movie1";
const commentBtn = document.querySelector('.comment-btn');
const crossBtn = document.querySelector(".comment-cross");
const commentPopup = document.querySelector(".comment-popup")

const hidePopup = () => {
  commentPopup.style.display = "none";
}

crossBtn.addEventListener("click", hidePopup)

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
    }),
  });
  const commentCall = await response.text();
  console.log(commentCall)
  return commentCall
}

const getData = async () => {
  const getResponse = await fetch(getUrl);
  const result = await getResponse.json();
  return result
}

const insertComment = async ()=> {
  const insertDom = await getData()
  display(insertDom);
  index(insertDom)
}

const display =  (comments) => {
  let li = "";
  comments.forEach((commentItem, id) => {
    li += `
          <li class="comment-detail">
          <span class="date">${commentItem.creation_date}</span>
          <span class="name">${commentItem.username}:</span>
          <span class="commet">${commentItem.comment}</span>
        </li>
    `
  })
  document.querySelector(".comment-holder").innerHTML = li
}

const index = (indices) => {
  console.log("indices",indices)
  let sum = 1;
  for (let i = 1; i <indices.length; i++) {
    sum = sum + 1;
  }
  document.querySelector(".comment-heading-container").innerHTML =` <h3 class="comment-heading">Comments(${sum})</h3> `
 
}

commentBtn.addEventListener ("click", async (e) => {
  e.preventDefault();
  const username = document.querySelector(".name-input").value.trim();
  const comment = document.querySelector(".comment-text").value.trim();
  const item_id = "movie1";
  if(username !=="" && comment !== "") {
   await addComment({username, comment, item_id})
   insertComment()
  }
  document.getElementById("comment-form").reset()
})

export {addComment, getData, hidePopup}