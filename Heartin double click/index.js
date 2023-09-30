const img = document.querySelector(".container"),
    heart = document.querySelector(".heart");


img.addEventListener("dblclick", (e) => {
    let Xvalue = e.clientX - e.target.offsetLeft;
    let Yvalue = e.clientY - e.target.offsetTop;


    heart.style.left = `${Xvalue}px`;
    heart.style.top = `${Yvalue}px`;

    heart.classList.add("active");
    setTimeout(() => {
        heart.classList.remove("active");
    }, 1000)
});
