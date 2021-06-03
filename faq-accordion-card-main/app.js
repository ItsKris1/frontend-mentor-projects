const arrowDowns = document.querySelectorAll(".arrow-down");
const answers = document.querySelectorAll(".answer");

arrowDowns.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const answer = e.currentTarget.parentElement.nextElementSibling;
    answers.forEach((answ) => {
      if (answ !== answer) {
        answ.classList.remove("show-answer");
        const currentArrow =
          answ.previousElementSibling.querySelector(".arrow-down");
        console.log(currentArrow);
        currentArrow.style.transform = "rotate(360deg)";
      }
    });
    console.log(!answer.classList.contains("show-answer"));
    if (!answer.classList.contains("show-answer")) {
      answer.classList.add("show-answer");
      arrow.style.transform = "rotate(180deg)";
    } else {
      answer.classList.remove("show-answer");
      arrow.style.transform = "rotate(360deg)";
    }
  });
});
