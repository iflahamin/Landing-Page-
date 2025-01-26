// Get the hamburger button and the nav element
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

// Get the logos
const logo1 = document.getElementById('logo1');
const logo2 = document.getElementById('logo2');

// Toggle the active class on the nav for the hamburger menu
hamburger.addEventListener('click', (e) => {
    nav.classList.toggle('active');
    // Toggle hamburger icon between ☰ and ✖
    if (nav.classList.contains('active')) {
        hamburger.innerHTML = '&#10006;'; // Cross (✖)
    } else {
        hamburger.innerHTML = '&#9776;'; // Hamburger (☰)
    }
    e.stopPropagation(); // Prevent this event from propagating to the document listener
});

// Close the menu when clicking outside of it
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('active');
        hamburger.innerHTML = '&#9776;'; // Revert to hamburger icon
    }
});

// Close the menu when clicking any link in the dropdown
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.innerHTML = '&#9776;'; // Revert to hamburger icon
    });
});

// Function to toggle logos based on window size for all sections
function toggleLogos() {
    const allLogos1 = document.querySelectorAll('#logo1'); // All instances of logo1
    const allLogos2 = document.querySelectorAll('#logo2'); // All instances of logo2

    if (window.innerWidth <= 768) {
        // Show logo1 (when hamburger is visible) for all sections
        allLogos1.forEach((logo) => (logo.style.display = 'block'));
        allLogos2.forEach((logo) => (logo.style.display = 'none'));
    } else {
        // Show logo2 (when hamburger is hidden) for all sections
        allLogos1.forEach((logo) => (logo.style.display = 'none'));
        allLogos2.forEach((logo) => (logo.style.display = 'block'));
    }
}

// Listen for window resize events
window.addEventListener('resize', toggleLogos);

// Initialize logos based on current window size
toggleLogos();


// Get the chatbot button and chat window elements
const chatbotBtn = document.getElementById('chatbot-btn');
const chatWindow = document.getElementById('chat-window');
const closeChatBtn = document.getElementById('close-chat');

// Open the chat window when the chatbot button is clicked
chatbotBtn.addEventListener('click', () => {
    chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
});

// Close the chat window when the close button is clicked
closeChatBtn.addEventListener('click', () => {
    chatWindow.style.display = 'none';
});

// Adjust navbar and hamburger icon positions
function adjustNavbarPosition() {
    const header = document.querySelector('header');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (window.innerWidth <= 768) {
        header.style.paddingTop = '10px'; // Align header for smaller screens
        hamburger.style.top = '-5px'; // Adjust hamburger
    } else {
        header.style.paddingTop = '0';
        hamburger.style.top = '0';
    }

    navLinks.forEach((link) => {
        link.style.marginTop = '5px'; // Adjust nav items alignment
    });
}

/* Home Section Elements */

// Listen for resize and load events to adjust navbar
window.addEventListener('resize', adjustNavbarPosition);
window.addEventListener('load', adjustNavbarPosition);


// Animation for sir
document.addEventListener("DOMContentLoaded", function () {
    // Function to add animation class
    const addAnimationOnScroll = (element, animationClass) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    element.style.animation = animationClass;
                    // Optional: Remove observer if animation is one-time
                    // observer.unobserve(entry.target);
                } else {
                    // Reset animation to retrigger when scrolled back
                    element.style.animation = 'none';
                    setTimeout(() => {
                        element.style.animation = animationClass;
                    }, 100); // Small delay to reset animation
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the element is visible
        
        observer.observe(element);
    };

    // Image animation
    const sirImage = document.getElementById("sir");
    if (sirImage) {
        addAnimationOnScroll(sirImage, 'smoothSlideIn 2s ease-out forwards');
    } else {
        console.error("Element with id 'sir' not found.");
    }

    // Offers animation
    const offersContainer = document.getElementById("offers");
    if (offersContainer) {
        addAnimationOnScroll(offersContainer, 'smoothSlideBottom 3s ease-out forwards');
    } else {
        console.error("Element with id 'offers' not found.");
    }
    // Home Text H1 Animation
    const homeTextH1 = document.querySelector(".home-text-h1");
    if (homeTextH1) {
        addAnimationOnScroll(homeTextH1, 'slideIn 2s ease-out forwards');
    } else {
        console.error("Element with class 'home-text-h1' not found.");
    }
    //  Home Text Paragraph Animtion
    const homeTextP = document.querySelector(".home-text-p");
    if (homeTextP) {
        addAnimationOnScroll(homeTextP, 'fadeInUp 4s ease-out forwards');
    } else {
        console.error("Element with class 'home-text-p' not found.");
    }
});



/* About Section */
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#about .about-text");


    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    aboutSection.classList.add("visible");
                } else {
                    aboutSection.classList.remove("visible");
                }
            });
        },
        { threshold: 0.4 } // Trigger animation when 40% of section is visible
    );

    observer.observe(aboutSection);
});

/* Registration Section */
document.querySelector(".registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from actually submitting
    const courseSelect = document.getElementById("course");
    
    // Remove existing error message if present
    let existingError = document.getElementById("course-error");
    if (existingError) {
        existingError.remove();
    }

    if (courseSelect.value === "select") {
        // Create error message element
        let errorMessage = document.createElement("div");
        errorMessage.id = "course-error";
        errorMessage.style.color = "red";
        errorMessage.style.fontSize = "12px";
        errorMessage.style.marginTop = "5px";
        errorMessage.textContent = "Please select a valid course.";
        
        // Insert error message below the select field
        courseSelect.parentNode.appendChild(errorMessage);
        return; // Stop further execution
    }

    alert("Submitted Successfully!");
    event.target.reset(); // Reset the form after successful submission
});

// Remove error message when a valid course is selected
document.getElementById("course").addEventListener("change", function() {
    let existingError = document.getElementById("course-error");
    if (existingError && this.value !== "select") {
        existingError.remove();
    }
});




