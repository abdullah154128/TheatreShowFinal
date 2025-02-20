document.addEventListener('DOMContentLoaded', function() {
    const profileButtons = document.querySelectorAll('.profile-btn');
    
    profileButtons.forEach(button => {
        button.addEventListener('click', function() {
            const artistCard = this.closest('.artist-card');
            const artistName = artistCard.querySelector('h3').textContent;
            // You can implement the profile view functionality here
            alert(`Viewing profile of ${artistName}`);
        });
    });
});



const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});


/* filepath: /C:/Users/SS COMPUTER/Desktop/E-Project/theatre.js */
document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        // Get the href path
        const linkPath = link.getAttribute('href');
        
        // Check if the current page matches the link
        if (currentLocation.includes(linkPath) && linkPath !== '#') {
            link.classList.add('active');
        }
    });
});


/* filepath: /C:/Users/SS COMPUTER/Desktop/E-Project/theatre.js */
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const productBoxes = document.querySelectorAll('.artist-card');
    const noResults = document.getElementById('noResults');

    // Focus search input when / is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    });

    // ...existing search functionality...

    // Add loading animation
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        let hasResults = false;

        // Add loading class
        document.querySelector('.search-icon').classList.add('fa-spinner', 'fa-spin');
        
        setTimeout(() => {
            productBoxes.forEach(box => {
                const title = box.querySelector('h3').textContent.toLowerCase();
                const description = box.querySelector('.shows').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    box.style.display = 'block';
                    hasResults = true;
                } else {
                    box.style.display = 'none';
                }
            });

            // Remove loading class
            document.querySelector('.search-icon').classList.remove('fa-spinner', 'fa-spin');
            
            // Show/hide no results message
            noResults.style.display = hasResults || searchTerm === '' ? 'none' : 'block';
        }, 300);
    });
});