const postUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/m7YKVpMPjxNMTHAHFroS/comments";
const getUrl =  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/m7YKVpMPjxNMTHAHFroS/comments?item_id=movie1";
const commentBtn = document.querySelector('.comment-btn')

const addComment = async (comment) => {
  console.log("comment",comment)
  const response = await fetch(postUrl, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(
      {
      userName: comment[1],
      comment: comment[2]
    }),
  });
  const commentCall = await response.json();
  return commentCall
}

commentBtn.addEventListener ("click", (e) => {
  e.preventDefault();
  const nameInput = document.querySelector(".name-input").value.trim();
  const commentInput = document.querySelector(".comment-text").value.trim();
  if(nameInput !=="" && commentInput !== "") {
    addComment(nameInput, commentInput)
  }
})

export default addComment