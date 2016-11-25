// open all anchor tags with the class 'extLink' in a new tab/window
var anchorClickHandler = function () {
    open(this.href);
    return false;
};
document.addEventListener("DOMContentLoaded", function (evt) {
    var anchor = document.getElementsByClassName("extLink");
    for (var i = 0; i < anchor.length; i++) {
        anchor[i].onclick = anchorClickHandler;
    }
});

// vertical padding for navbar links
var windowWidth = window.innerWidth;
var verticalScrollPadding = 0;
if (windowWidth <= 584) {
    verticalScrollPadding = -110;
} else {
    verticalScrollPadding = -60;
}
var shiftWindow = function () { scrollBy(0, verticalScrollPadding) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);