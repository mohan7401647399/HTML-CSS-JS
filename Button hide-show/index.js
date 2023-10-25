var input = document.querySelector("input");
var btn = document.querySelector("span i");


btn.onclick = function () {
    if (input.type === "password") {
        input.type = "text";
        btn.classList.add("hide-btn");

    } else {
        input.type = "password";
        btn.classList.remove("hide-btn");
    }
}
