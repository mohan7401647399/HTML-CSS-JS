let scrollGallery = document.querySelector(".gallery"),
    backBtn = document.getElementById("backBtn"),
    nextBtn = document.getElementById("nextBtn");


scrollGallery.addEventListener("wheel", (img) => {
    img.preventDefault();
    scrollGallery.scrollLeft += img.deltaY;
    scrollGallery.style.scrollBehaviour = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollGallery.style.scrollBehaviour = "smooth";
    scrollGallery.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollGallery.style.scrollBehaviour = "smooth";
    scrollGallery.scrollLeft -= 900;
})