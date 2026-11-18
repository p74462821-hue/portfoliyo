
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// Close menu after clicking a link
document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// Welcome message in console
console.log("Welcome to Pooja's Portfolio Website!");
