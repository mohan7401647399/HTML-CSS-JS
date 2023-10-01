const contr = document.querySelector(".container"),
    over = document.getElementById("over");


let perVal = 0;

let increment = setInterval(() => {
    perVal++;
    over.textContent = `${perVal}%`;
    if(perVal === 100){
        clearInterval(increment);
        contr.classList.remove("active");
    }
}, 100);