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





document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const messageDisplay = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form submission
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || subject === "" || message === "") {
            messageDisplay.style.color = "red";
            messageDisplay.textContent = "Please fill out all fields.";
            return;
        }

        messageDisplay.style.color = "green";
        messageDisplay.textContent = "Message sent successfully! We'll get back to you soon.";

        form.reset(); // Clear the form after submission
    });
});