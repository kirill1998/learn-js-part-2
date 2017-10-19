var field = document.getElementById("field");
var ball = document.getElementById("ball");
var box = field.getBoundingClientRect();

field.onclick = function(event) {
    event = event || window.event;
    if ((event.clientX - box.left - parseInt(ball.width / 2) - field.clientLeft) < 0) {
        var x = 0;
    } else
    if ((event.clientX - box.left - parseInt(ball.width / 2) - field.clientLeft) > (field.clientWidth - parseInt(ball.width))) {
        var x = field.clientWidth - parseInt(ball.width);
    } else
        var x = event.clientX - box.left - parseInt(ball.width / 2) - field.clientLeft;
    if ((event.clientY - box.top - parseInt(ball.height / 2) - field.clientTop) < 0) {
        var y = 0;
    } else
    if ((event.clientY - box.top - parseInt(ball.height / 2) - field.clientTop) > (field.clientHeight - parseInt(ball.height))) {
        var y = field.clientHeight - parseInt(ball.height);
    } else
        var y = event.clientY - box.top - parseInt(ball.height / 2) - field.clientTop;
    ball.style.left = x + "px";
    ball.style.top = y + "px";
}