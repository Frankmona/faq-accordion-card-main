const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
      }
      item.classList.remove("show-text");
    });
    question.classList.toggle("show-text");
  });
});

// OR use this

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     // using the parent element was use to target the parent element*2
//     const questions = e.currentTarget.parentElement.parentElement;
//     questions.classList.toggle("show-text");
//   });
// });
