const tweetInput = document.querySelectorAll(".tweet-input");
const tweetBtn = document.querySelectorAll(".tweet-btn");
const close = document.querySelector(".close");

tweetInput.forEach((input) => {
  input.addEventListener("input", (event) => {
    const characters = event.target.value.split("");

    tweetBtn.forEach((btn) => {
      if (characters.length > 0) {
        btn.classList.add("active-btn");
      } else {
        btn.classList.remove("active-btn");
      }
    });
  });
});
