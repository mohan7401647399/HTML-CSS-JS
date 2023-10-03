const slider = document.querySelector("input");
const bar = document.querySelector(".progress-bar");
const thumb = document.querySelector(".thumb");
const slide = document.querySelector(".slide-icon")

slider.oninput = () => {
    let value = slider.value;
    thumb.style.left = value + '%';
    bar.style.width = value + '%';
    if (value < 20) {
        slide.style.marginTop = "0px"
    }
    if (value >= 20) {
        slide.style.marginTop = "-150px";
    }
    if (value >= 40) {
        slide.style.marginTop = "-300px";
    }
    if (value >= 60) {
        slide.style.marginTop = "-450px";
    }
    if (value >= 80) {
        slide.style.marginTop = "-600px";
    }
}