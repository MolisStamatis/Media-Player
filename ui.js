document.addEventListener('DOMContentLoaded', function() {
    const createCard = document.querySelector('.create-new');
    const cardBack = createCard.querySelector('.card-back');

    createCard.addEventListener('click', function(event) {
        // Only toggle the flip if the clicked target is not part of the form
        if (!cardBack.contains(event.target)) {
            createCard.classList.toggle('flipped');
        }
    });

    createCard.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        console.log("User created!"); // Replace with actual user creation logic
        createCard.classList.toggle('flipped'); // Flip back after user creation
    });
});

const overlay = document.getElementById("fade-overlay");
const stylesheet = document.getElementById("styling");
const lightColor = '#f5f5f5';
const darkColor = '#121212';

document.getElementById("theme").addEventListener('change', (event) => {
    console.log("Theme checkbox changed. Checked:", event.target.checked);

    // Determine the background color based on the theme
    const newColor = event.target.checked ? darkColor : lightColor;
    overlay.style.backgroundColor = newColor;

    // Show the overlay with fade-in effect
    overlay.classList.add('fade-in');
    console.log("Added fade-in class to overlay. Current classes:", overlay.className);

    // Wait for the fade-in effect before changing the stylesheet
    setTimeout(() => {
        if (event.target.checked) {
            stylesheet.href = "darkmode.css";
            document.getElementById("icon").src = "./icons/plus.png";
            document.getElementById("page-icon").href = "./icons/icon.png";
        } else {
            stylesheet.href = "lightmode.css";
            document.getElementById("icon").src = "./icons/plus-white.png";
            document.getElementById("page-icon").href = "./icons/icon-white.png";
        }

        // Hide the overlay with fade-out effect
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        console.log("Added fade-out class to overlay. Current classes:", overlay.className);

        // Ensure the overlay disappears after fade-out
        setTimeout(() => {
            overlay.classList.remove('fade-out');
        }, 500); // Match this duration with the CSS transition
    }, 500); // Match this duration with the CSS transition
});