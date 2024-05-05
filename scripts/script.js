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
  const offNavBar = document.querySelector(".off-navbar");
  if (window.scrollY > 0) {
    navBar.classList.add("navbar-bg");
    offNavBar.classList.add("offcanvas-bg");
    offNavBar.classList.add("offcanvas-bg");
  } else {
    navBar.classList.remove("navbar-bg");
    offNavBar.classList.remove("offcanvas-bg");
  }
});
