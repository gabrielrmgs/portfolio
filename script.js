let btnApi = document.getElementById("projeto-api");
btnApi.addEventListener("click", videoapi);
function videoapi() {
    if (document.getElementById("print-api-div").style.display === "none") {
        document.getElementById("print-api-div").style.display = "flex"
        document.getElementById("print-api-div").style.alignItems = "center";
        document.getElementById("print-api-div").style.justifyContent = "center";

    } else {
        document.getElementById("print-api-div").style.display = "none"
    }
}