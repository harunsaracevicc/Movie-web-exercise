const movDrama = document.querySelector(".movies-drama");

const btn = document.querySelector(".primary-headline");
btn.onclick = function () {
  if (movDrama.style.display !== "none") {
    movDrama.style.display = "none";
  } else {
    movDrama.style.display = "block";
  }
};

const movAction = document.querySelector(".movies-action");
const btn2 = document.querySelector(".primary-headline2");
btn2.onclick = function () {
  if (movAction.style.display !== "block") {
    movAction.style.display = "block";
  } else {
    movAction.style.display = "none";
  }
};

const movAbout = document.querySelector(".about");
const btnShowmore = document.querySelector(".movies-boxes");
btnShowmore.onclick = function () {
  if (movAbout.style.display !== "block") {
    movAbout.style.display = "block";
  } else {
    movAbout.style.display = "none";
  }
};
