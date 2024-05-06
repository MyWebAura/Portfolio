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
  var navbarItems = document.querySelectorAll('.nav-item');
  navbarItems.forEach(function(navbarItem) {
      navbarItem.classList.remove('active');
  });

  item.classList.add('active');
}


