document.addEventListener('DOMContentLoaded', () => {
    const seatGrid = document.querySelector('.seat-grid');
    const selectedSeatsCount = document.getElementById('selected-seats');
    const totalPrice = document.getElementById('total-price');
    const TICKET_PRICE = 10;
    const rows = 8;
    const seatsPerRow = 10;

    function generateSeats() {
        seatGrid.innerHTML = ''; // Clear existing seats
        
        for (let i = 0; i < rows; i++) {
            const row = document.createElement('div');
            row.classList.add('seat-row');
            
            // Add row label
            const rowLabel = document.createElement('div');
            rowLabel.style.width = '20px';
            rowLabel.textContent = String.fromCharCode(65 + i); // Convert to A, B, C, etc.
            row.appendChild(rowLabel);

            for (let j = 0; j < seatsPerRow; j++) {
                const seat = document.createElement('div');
                seat.classList.add('seat');
                const seatId = `${i + 1}-${j + 1}`;
                seat.dataset.seatId = seatId;
                
                // Randomly determine if seat should be booked (20% chance)
                if (Math.random() < 0.2) {
                    seat.classList.add('booked');
                } else {
                    seat.classList.add('available');
                    
                    // Add click handler for available seats
                    seat.addEventListener('click', () => {
                        if (!seat.classList.contains('booked')) {
                            seat.classList.toggle('selected');
                            updateSelectedCount();
                        }
                    });
                }
                
                row.appendChild(seat);
            }
            seatGrid.appendChild(row);
        }
    }

    // Update selected seats count and total price
    function updateSelectedCount() {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        selectedSeatsCount.textContent = selectedSeats.length;
        totalPrice.textContent = selectedSeats.length * TICKET_PRICE;
    }

    // Generate seats initially
    generateSeats();
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

