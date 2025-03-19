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

document.querySelectorAll('.impact-cards .card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY, target } = e;
        const { clientWidth, clientHeight } = target;
        const xRotation = ((offsetY - clientHeight / 2) / clientHeight) * 10;
        const yRotation = ((offsetX - clientWidth / 2) / clientWidth) * -10;
        
        card.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
});
