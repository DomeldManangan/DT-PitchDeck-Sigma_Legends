let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll Down
        header.style.top = "-100px"; // Adjust based on header height
    } else {
        // Scroll Up
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
});
