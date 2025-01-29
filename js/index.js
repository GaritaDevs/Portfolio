//Home

let banner = document.querySelector(".banner");
let portfolio = document.querySelector(".portfolio");
let socialMedia = document.querySelector(".socialMedia");
let fondoNav = document.querySelector(".fondoNav");
let about = document.querySelector(".about");
let skills = document.querySelector(".skills");
let sectionForm = document.querySelector(".sectionForm");
let dayNight = document.querySelector(".dayNight");
dayNight.onclick = function () {
  banner.classList.toggle("night");
  portfolio.classList.toggle("night");
  socialMedia.classList.toggle("night");
  fondoNav.classList.toggle("night");
  about.classList.toggle("night");
  skills.classList.toggle("night");
  sectionForm.classList.toggle("night");
};

let typingText = new Typed("#spanHome", {
  strings: ["Esteban G", "Developer", "Coder"],
  loop: true,
  typeSpeed: 200,
  backSpeed: 50,
  backDelay: 1000,
});

//Section Redes

let list = document.querySelectorAll(".sci .liSocial");
let bg = document.querySelector(".socialMedia");
list.forEach((elements) => {
  elements.addEventListener("mouseenter", function (event) {
    let color = event.target.getAttribute("data-color");
    bg.style.backgroundColor = color;
  });
  elements.addEventListener("mouseleave", function (event) {
    bg.style.backgroundColor = "orange";
  });
});

VanillaTilt.init(document.querySelector(".sci .liSocial a"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".sci .liSocial a"));
