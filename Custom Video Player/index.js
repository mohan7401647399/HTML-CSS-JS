const container = document.querySelector(".container"),
    video = document.querySelector("video"),
    playPauseBtn = document.querySelector(".play-pause i"),
    progressBar = document.querySelector(".progress-area")

video.addEventListener("timeupdate", (e) => {
    let { currentTime, duration } = e.target;
    let percent = (currentTime / duration) * 100;
    progressBar.style.width = `${percent}%`
})

playPauseBtn.addEventListener("click", () => {
    video.paused ? video.play() : video.pause()
});

video.addEventListener("play", () => {
    playPauseBtn.classList.replace("fa-play", "fa-pause")
});

video.addEventListener("pause", () => {
    playPauseBtn.classList.replace("fa-pause", "fa-play")
});