const celsius = document.querySelector("#celsius"),
    fahrenheit = document.querySelector("#fahrenheit");

// set focus to the celsius input field when the page loads
window.addEventListener("load", () => celsius.focus());

// convert celsius to fahrenheit
celsius.addEventListener("input", () => {
    fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
    if (!celsius.value) fahrenheit.value = "";
})

fahrenheit.addEventListener("input", () => {
    celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2);
    if (!fahrenheit.value) celsius.value = "";
})