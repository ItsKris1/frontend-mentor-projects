const questions = document.querySelectorAll(".question");
const arrows = document.querySelectorAll(".arrow-down");
const answers = document.querySelectorAll(".answer");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    // If any other question winddo is open we want to close it;

    const currentAnswer = question.querySelector(".answer");
    answers.forEach((answer) => {
      if (answer !== currentAnswer) {
        answer.classList.remove("show-answer");
      }
    });
    // If any other arrow is rotated, we want to rotate it back as it was;
    const currentArrow = question.querySelector(".arrow-down");
    arrows.forEach((arrow) => {
      if (arrow !== currentArrow) {
        arrow.style.transform = "rotate(360deg)";
      }
    });

    const Toggle = currentAnswer.classList.toggle("show-answer");

    if (Toggle) {
      currentArrow.style.transform = "rotate(180deg)";
    } else {
      currentArrow.style.transform = "rotate(360deg)";
    }
  });
});
