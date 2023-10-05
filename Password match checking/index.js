const ps_1 = document.querySelector("#ps_1"),
    ps_2 = document.querySelector("#ps_2"),
    errTxt = document.querySelector(".err_txt"),
    showBtn = document.querySelector(".show"),
    btn = document.querySelector("button");

function active() {
    if (ps_1.value.length >= 6) {
        btn.removeAttribute("disabled", "");
        btn.classList.add("active");
        ps_2.removeAttribute("disabled", "");
    } else {
        btn.setAttribute("disabled", "");
        btn.classList.remove("active");
        ps_2.setAttribute("disabled", "");
    }
}

btn.onclick = function () {
    if (ps_1.value != ps_2.value) {
        errTxt.style.display = "block";
        errTxt.classList.remove("matched");
        errTxt.textContent = "Error! Confirm password not match";
        return false;
    } else {
        errTxt.style.display = "block";
        errTxt.classList.add("matched");
        errTxt.textContent = "Nice! Confirm password matched";
        return false;
    }
}

function active_2() {
    if (ps_2 != "") {
        showBtn.style.display = "block";
    } else {
        showBtn.style.display = "none";
    }
}

showBtn.onclick = function(){
    if(ps_1.type == "password" && ps_2.type == "password"){
        ps_1.type = "text";
        ps_2.type = "text";
        this.textContent = "Hide";
        this.classList.add("active");
    }else{
        ps_1.type = "password";
        ps_2.type = "password";
        this.textContent = "show";
        this.classList.remove("active");

    }
}
