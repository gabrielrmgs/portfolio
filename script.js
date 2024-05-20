let btnApi = document.getElementById("projeto-api");
btnApi.addEventListener("click", videoapi);
function videoapi() {
    if (document.getElementById("print-api").style.display === "none") {
        document.getElementById("print-api").style.display = "block"
    } else {
        document.getElementById("print-api").style.display = "none"
    }

}