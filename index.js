document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'booking.html';
    });
});
/* filepath: /c:/Users/SS COMPUTER/Desktop/E-Project/index.js */
const shows = {
    'A': {
        title: 'The Phantom of the Opera',
        description: 'By Andrew Lloyd Webber',
        image: 'The-Phantom-of-the-Opera-His-Majestys-Theatre.webp',
        price: '34.99'
    },
    'B': {
        title: 'Moulin Rouge! The Musical',
        description: 'By Baz Luhrmann & Craig Pearce',
        image: 'scene-moulin-rouge.jpg',
        price: '24.99'
    },
    'C': {
        title: 'Hamilton',
        description: 'By Alexander Hamilton',
        image: 'hamilton-theatre-marquee.jpg',
        price: '29.99'
    },
    'D': {
        title: 'Schmigadoon',
        description: 'By Cinco Paul & Ken Daurio',
        image: 'schmigadoon.jpg',
        price: '17.99'
    },
    'E': {
        title: 'Oedipus Rex',
        description: 'By Andrew Lloyd Webber',
        image: 'or.jpg',
        price: '39.99'
    },
    'F': {
        title: 'Harry Potter and the Cursed Child',
        description: 'By Stephen Schwartz',
        image: 'harry.jpg',
        price: '59.99'
    },
    'G': {
        title: 'Hua Kuch Yoon',
        description: 'By Dawar Mahmood',
        image: 'hky.jpeg',
        price: '19.99'
    },
    'H': {
        title: 'Mughal-e-Azam',
        description: 'By Faraz Zubair',
        image: 'mughal.jpeg',
        price: '19.99'
    },
    'I': {
        title: 'Bananistan',
        description: 'By Tulin Khalid Azeem',
        image: 'bananistan.png',
        price: '19.99'
    },
    'J': {
        title: 'Dil e Nadaan',
        description: 'By Omair Rana',
        image: 'dil.png',
        price: '19.99'
    },
    'K': {
        title: 'The Lion King',
        description: 'By Taymor',
        image: 'lion.jpg',
        price: '19.99'
    },
    'L': {
        title: 'The Dark Knight',
        description: 'By Christopher Nolan',
        image: 'the-dark-knight-original.jpg',
        price: '45.99'
    },
    'M': {
        title: 'The Meg',
        description: 'By Jon Turteltaub',
        image: 'meg2.jpg',
        price: '39.99'
    },
    'N': {
        title: 'Flight Risk',
        description: 'By Mel Gibson',
        image: 'flight.png',
        price: '19.99'
    },
    'O': {
        title: 'Avengers: Endgame',
        description: 'By Joe Russo & Anthony Russo',
        image: 'endgame.jpg',
        price: '42.99'
    },
    'P': {
        title: 'Tenet',
        description: 'By Christopher Nolan',
        image: 'tenet.jpg',
        price: '37.99'
    },
    'Q': {
        title: 'Maleficent',
        description: 'By Robert Stromberg',
        image: 'maleficent.jpg',
        price: '42.99'
    },
    'X': {
        title: 'Oppenheimer',
        description: 'By Christopher Nolan - Special Featured Show',
        image: 'oppenheimer.jpg',
        price: '29.99'
    },
    'Y': {
        title: 'Interstellar',
        description: 'By Christopher Nolan - Special Featured Show',
        image: 'intersteller.jpg',
        price: '29.99'
    },
    'Z': {
        title: 'Avengers: Infinity War',
        description: 'By Joe Russo & Anthony Russo - Special Featured Show',
        image: 'infinity.jpg',
        price: '29.99'
    },
    'AA': {
        title: 'Spider-Man: No Way Home',
        description: 'By Marvel Studios',
        image: 'spidernwh.webp',
        price: '39.99'
    },
    'AB': {
        title: 'M3GAN',
        description: 'By Gerard Johnstone',
        image: 'megan.jpeg',
        price: '29.99'
    },
    'AC': {
        title: 'Jumanji',
        description: 'By Jake Kasdan',
        image: 'jumanji.jpg',
        price: '24.99'
    },
    'AD': {
        title: 'The Conjuring 2',
        description: 'By James Wan',
        image: 'conjuring.jpg',
        price: '27.99'
    },
    'AE': {
        title: 'Tin & Tina',
        description: 'By Rubin Stein',
        image: 'tin.webp',
        price: '32.99'
    },
    'AF': {
        title: 'Captain America: Brave New World',
        description: 'By Marvel Studios',
        image: 'captain-america-brave-new-worlds-reshoots-have-reimagined-serpent-society-as-special-ops-team---spoilers-ab216029.jpg',
        price: '44.99'
    },
    'AG': {
        title: 'Wicked',
        description: 'By Stephen Schwartz',
        image: 'wicked.jpg',
        price: '45.99'
    },
    'AH': {
        title: 'Jurassic Park',
        description: 'By Colin Trevorrow',
        image: 'jurassic.jpg',
        price: '42.99'
    }
};

document.querySelectorAll('.show-btn').forEach(button => {
    button.addEventListener('click', () => {
        const showId = button.getAttribute('data-show');
        const show = shows[showId];
        const params = new URLSearchParams({
            id: showId,
            title: show.title,
            description: show.description,
            image: show.image,
            price: show.price
        });
        window.location.href = `booking.html?${params.toString()}`;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.product-container');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');
    const totalSlides = 3;
    let currentSlide = 0;
    let slideInterval;

    function moveSlide(direction) {
        currentSlide = direction === 'next' 
            ? (currentSlide + 1) % totalSlides 
            : (currentSlide - 1 + totalSlides) % totalSlides;
        
        container.style.transform = `translateX(-${currentSlide * 33.333}%)`;
    }

    function autoSlide() {
        slideInterval = setInterval(() => {
            moveSlide('next');
        }, 3000); // 3 seconds interval
    }

    // Event Listeners
    prevBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        moveSlide('prev');
        autoSlide();
    });

    nextBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        moveSlide('next');
        autoSlide();
    });

    // Start automatic slideshow
    autoSlide();
});
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
