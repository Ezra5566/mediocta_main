// info.js

// Function to hide the loader after the page has fully loaded
window.onload = function() {
    const loader = document.querySelector('.loader');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500); // Adjust the timeout to match your loading animation duration
};
// CUSTOM CURSOR

document.addEventListener("DOMContentLoaded", () => {
    const outerCursor = document.querySelector(".outer-cursor");
    const innerCursor = document.querySelector(".inner-cursor");

    // Update cursor position on mousemove
    document.addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event;

        // Move the outer cursor
        outerCursor.style.left = `${clientX}px`;
        outerCursor.style.top = `${clientY}px`;

        // Move the inner cursor
        innerCursor.style.left = `${clientX}px`;
        innerCursor.style.top = `${clientY}px`;
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll("a, h1, p");
    interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
            outerCursor.classList.add("hover");
            innerCursor.classList.add("hover");
        });
        el.addEventListener("mouseleave", () => {
            outerCursor.classList.remove("hover");
            innerCursor.classList.remove("hover");
        });
    });
});

// You can add more specific functions or event listeners here for the About page