// Get all navigation links
/*const navLinks = document.querySelectorAll('.navigation__link');

// Add event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Prevent default jump-to-section behavior
        event.preventDefault();

        // Get the target section id from the href attribute of the link
        const targetId = event.target.getAttribute('href');

        // Get the target section element
        const targetSection = document.querySelector(targetId);

        // Scroll to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth' // Smooth scroll
        });
    });
});*/
document.querySelectorAll('.navigation__link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
