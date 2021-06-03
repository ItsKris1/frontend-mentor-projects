const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    // Remove show answer and from other questions
    const currentAnswer = question.querySelector(".answer");
    answers.forEach((answer) => {
      if (answer !== currentAnswer) {
        answer.classList.remove("show-answer");
      }
    });

    currentAnswer.classList.toggle("show-answer");
  });
});
