fetch("/navbar.html")
    .then(response => response.text())
    .then(html => {
        const navbar = document.getElementById("navbar");
        navbar.innerHTML = html;
        navbar.classList.add("loaded");
    });

window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});
