var menu = document.getElementById("menu");
var text = document.getElementById("text");

text.addEventListener("click", openClose);

function openClose() {
    menu.classList.toggle("close");

}