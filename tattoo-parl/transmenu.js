window.addEventListener("scroll", function () {
    let header = document.getElementById("content");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    header.style.opacity = 0.7 - scrollTop / 500;
});