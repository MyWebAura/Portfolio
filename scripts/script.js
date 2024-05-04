const mobileViewBtn = document.getElementById("mobile-view-btn");
const videoPlayer = document.getElementById("videoPlayer");
const projectVideo = document.querySelector(".project-video")
function closeVideo(){
    projectVideo.pause();
    projectVideo.currentTime = 0;
    videoPlayer.classList.add("d-none");
}
function openVideo(file){
    projectVideo.src= file;
    videoPlayer.classList.remove("d-none");
    
}