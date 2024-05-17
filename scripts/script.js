const mobileViewBtn = document.getElementById("mobile-view-btn");
const videoPlayer = document.getElementById("videoPlayer");
const projectVideo = document.querySelector(".project-video");
function closeVideo() {
  projectVideo.pause();
  projectVideo.currentTime = 0;
  videoPlayer.classList.add("d-none");
}
function openVideo(file) {
  projectVideo.src = file;
  videoPlayer.classList.remove("d-none");
}
document.addEventListener("scroll", () => {
  const navBar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navBar.classList.add("navbar-bg");
  } else {
    navBar.classList.remove("navbar-bg");
  }
});
function changeActive(item) {
  removeActive(item);

  item.classList.add("active");
}

function removeActive(item) {
  var navbarItems = document.querySelectorAll(".nav-link");
  navbarItems.forEach(function (navbarItem) {
    navbarItem.classList.remove("active");
  });
}
document.addEventListener("scroll", () => {
  const scrollArrow = document.querySelector(".arrow-for-scroll");
  if (window.scrollY > 0) {
    scrollArrow.classList.remove("d-none");
  } else {
    scrollArrow.classList.add("d-none");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".typed-text");
  const textToType = "MyWebAura";
  let index = 0;

  function type() {
    if (index < textToType.length) {
      textElement.textContent += textToType.charAt(index);
      index++;
        setTimeout(type, 70);
    } else {
      setTimeout(function () {
        const preloader = document.querySelector(".starting-preloader");
        preloader.style.opacity = 0;
        setTimeout(() => {
          preloader.style.display = "none";
        }, 1000);
      }, 400);
    }
  }
  setTimeout(type, 900);
});
