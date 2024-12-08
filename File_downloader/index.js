const input = document.querySelector("input"),
    btn = document.querySelector("button");


btn.addEventListener("click", e => {
    e.preventDefault();
    btn.innerText = "downloading file...."
    fetchFile(input.value);
    input.value = ""
});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file)
        console.log("tempURL is =>", tempUrl);
        let aTag = document.createElement("a");
        console.log("aTag is =>", aTag);
        aTag.href = tempUrl;
        console.log("aTag.hres is =>", aTag.href);
        aTag.download = url.replace(/^.*[\\\/]/, "");
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        btn.innerText = "Download File"
    }).catch(() => {
        btn.innerText = "Download File";
        alert("Failed to download file")
    })
}