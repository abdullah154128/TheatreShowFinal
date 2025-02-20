document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    
    document.getElementById('showImage').src = params.get('image');
    document.getElementById('showTitle').textContent = params.get('title');
    document.getElementById('showDescription').textContent = params.get('description');
    document.getElementById('showPrice').textContent = `$${params.get('price')}`;
});

document.addEventListener('DOMContentLoaded', function() {
    try {
        // Get DOM elements with error handling
        const seatSelect = document.getElementById('tier1');
        const quantitySelect = document.getElementById('ticketQuantity');
        const selectedSeatSpan = document.getElementById('selectedSeat');
        const ticketCountSpan = document.getElementById('ticketCount');
        const totalAmountSpan = document.getElementById('totalAmount');

        // Get URL parameters
        const params = new URLSearchParams(window.location.search);
        const showTitle = params.get('title');
        const showPrice = parseFloat(params.get('price'));
        const showImage = params.get('image');
        const showDescription = params.get('description');

        // Update show details if parameters exist
        if (showTitle && showPrice) {
            document.getElementById('showImage').src = showImage;
            document.getElementById('showTitle').textContent = showTitle;
            document.getElementById('showDescription').textContent = showDescription;
        }

        function calculateTotal() {
            const selectedSeat = seatSelect.value;
            const quantity = parseInt(quantitySelect.value) || 0;
            
            selectedSeatSpan.textContent = selectedSeat || 'None';
            ticketCountSpan.textContent = quantity;

            if (showPrice && quantity) {
                const total = showPrice * quantity;
                totalAmountSpan.textContent = total.toFixed(2);
            } else {
                totalAmountSpan.textContent = '0.00';
            }
        }

        // Add event listeners
        seatSelect.addEventListener('change', calculateTotal);
        quantitySelect.addEventListener('change', calculateTotal);
        
    } catch (error) {
        console.error('Error in booking.js:', error);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    try {
        // Get DOM elements
        const dateSelect = document.getElementById('dateSelect');
        const timeSelect = document.getElementById('timeSelect');
        const seatSelect = document.getElementById('tier1');
        const quantitySelect = document.getElementById('ticketQuantity');
        const proceedBtn = document.getElementById('proceedToPayment');
        const totalAmountSpan = document.getElementById('totalAmount');

        // Add click event listener to proceed button
        proceedBtn.addEventListener('click', function(e) {
            e.preventDefault();

            // Validate all fields
            if (!dateSelect.value || dateSelect.value === 'Select Date') {
                alert('Please select a date');
                return;
            }
            
            if (!timeSelect.value || timeSelect.value === 'Select Time') {
                alert('Please select a time');
                return;
            }
            
            if (!seatSelect.value || seatSelect.value === 'Select Seat No.') {
                alert('Please select a seat');
                return;
            }
            
            if (!quantitySelect.value || quantitySelect.value === 'Select No. of Tickets') {
                alert('Please select number of tickets');
                return;
            }

            // Get show details from URL parameters
            const urlParams = new URLSearchParams(window.location.search);
            
            // Create parameters for payment page
            const params = new URLSearchParams({
                title: document.getElementById('showTitle').textContent,
                seats: seatSelect.value,
                quantity: quantitySelect.value,
                total: totalAmountSpan.textContent,
                date: dateSelect.value,
                time: timeSelect.value,
                price: urlParams.get('price'),
                image: document.getElementById('showImage').src,
                description: document.getElementById('showDescription').textContent
            });

            // Redirect to payment page
            console.log('Redirecting to payment page with params:', params.toString());
            window.location.href = `payment.html?${params.toString()}`;
        });

    } catch (error) {
        console.error('Error in booking.js:', error);
    }
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

