var left = document.querySelector(".left");
var right = document.querySelector(".right");
var ul = document.querySelector(".slider .images");
var number = document.querySelectorAll(".slider .images > li > img").length;
var styleImg = getComputedStyle(document.querySelector(".slider .images > li> img"));
var styleUl = getComputedStyle(document.querySelector(".slider .images"));
var width = parseInt(styleImg.width);
var x = 0;

left.onclick = function(event) {
    if (parseInt(styleUl.left) > (-1 * width * (number - 3))) {
        x++;
        ul.style.left = (-130 * x) + "px";

    }
}
right.onclick = function(event) {
    if (parseInt(styleUl.left) < 0) {
        x--;
        ul.style.left = (-130 * x) + "px";
    }
}