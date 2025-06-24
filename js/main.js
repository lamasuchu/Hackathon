const usernameDisplay = document.getElementById('usernameDisplay');
const navLinks = document.querySelectorAll('.main-nav a');
const contentSections = document.querySelectorAll('.content-section');
const destinationGrids = document.querySelectorAll('.destination-grid');
const destinationModal = document.getElementById('destinationModal');
const closeModal = document.querySelector('.close-modal');
const bookingModal = document.getElementById('bookingModal');
const transportTabs = document.querySelectorAll('.transport-tab');
const transportSections = document.querySelectorAll('.transport-section');
const bookingSteps = document.querySelectorAll('.booking-step');
const nextButtons = document.querySelectorAll('.next-btn');
const backButtons = document.querySelectorAll('.back-btn');
const paymentMethods = document.querySelectorAll('.payment-method');
const paymentDetails = document.querySelectorAll('.payment-details');
const confirmBtn = document.querySelector('.confirm-btn');
const printBtn = document.querySelector('.print-btn');
const doneBtn = document.querySelector('.done-btn');



let currentBooking = {
    destination: null,
    transport: null,
    date: null,
    seats: [],
    paymentMethod: 'credit',
    reference: null
};


function init() {
    
    const username = localStorage.getItem('currentUser');
    if (username) {
        usernameDisplay.textContent = username;
    }
    
    
    loadDestinations();
    
    
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('travelDate').min = today;
    

    currentBooking.reference = generateBookingReference();
    document.getElementById('bookingReference').textContent = currentBooking.reference;
}

// Load destinations into grids
function loadDestinations() {
    destinationGrids.forEach(grid => {
        grid.innerHTML = '';
        
        destinations.forEach(destination => {
            const card = document.createElement('div');
            card.className = 'destination-card';
            card.dataset.id = destination.id;
            
            card.innerHTML = `
                <div class="destination-image">
                    <img src="./${destination.images[0]}" alt="${destination.name}">
                </div>
                <div class="destination-info">
                    <h3>${destination.name}</h3>
                    <p>${destination.description.substring(0, 100)}...</p>
                    <div class="destination-meta">
                        <div class="destination-rating">
                            ${'★'.repeat(Math.floor(destination.rating))}${'☆'.repeat(5 - Math.floor(destination.rating))}
                            <span>(${destination.reviews})</span>
                        </div>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => openDestinationModal(destination.id));
            grid.appendChild(card);
        });
    });
}

function openDestinationModal(id) {
    const destination = destinations.find(d => d.id === id);
    if (!destination) return;
    
    
    currentBooking.destination = destination.name;
    
    
    document.getElementById('modalDestinationName').textContent = destination.name;
    document.getElementById('modalDescription').textContent = destination.description;
    document.getElementById('modalDescription2').textContent = destination.information;
    
    

    const mainImage = document.getElementById('modalMainImage');
    mainImage.src = destination.images[0];
    mainImage.alt = destination.name;
    
    
    const thumbnailsContainer = document.querySelector('.thumbnail-images');
    thumbnailsContainer.innerHTML = '';
    
    destination.images.forEach((image, index) => {
        const thumb = document.createElement('img');
        thumb.src = image;
        thumb.alt = `${destination.name} - ${index + 1}`;
        thumb.addEventListener('click', () => {
            mainImage.src = `images/${image}`;
        });
        thumbnailsContainer.appendChild(thumb);
    });
    
    
    document.getElementById('bus-duration').textContent = destination.bus.duration;
    document.getElementById('bus-price').textContent = destination.bus.price;
    document.getElementById('bus-condition').textContent = destination.bus.condition;
    document.getElementById('bus-considerations').textContent = destination.bus.considerations;
    
    document.getElementById('plane-duration').textContent = destination.plane.duration;
    document.getElementById('plane-price').textContent = destination.plane.price;
    document.getElementById('plane-weather').textContent = destination.plane.weather;
    document.getElementById('plane-considerations').textContent = destination.plane.considerations;
    
    document.getElementById('helicopter-duration').textContent = destination.helicopter.duration;
    document.getElementById('helicopter-price').textContent = destination.helicopter.price;
    document.getElementById('helicopter-capacity').textContent = destination.helicopter.capacity;
    document.getElementById('helicopter-considerations').textContent = destination.helicopter.considerations;
    
    
    destinationModal.style.display = 'block';
}


function openBookingModal(transport) {
    currentBooking.transport = transport;
    
    
    document.getElementById('bookingTransportType').textContent = transport.charAt(0).toUpperCase() + transport.slice(1);
    document.getElementById('bookingDestinationName').textContent = currentBooking.destination;
    
    
    document.getElementById('summaryDestination').textContent = currentBooking.destination;
    document.getElementById('summaryTransport').textContent = transport;
    
    
    generateSeatMap(transport);
    

    destinationModal.style.display = 'none';
    bookingModal.style.display = 'block';
    
    
    resetBookingSteps(1);
}


function generateSeatMap(transport) {
    const seatMap = document.querySelector('.seat-map');
    seatMap.innerHTML = '';
    
    let rows, cols, seatLayout;
    
    if (transport === 'bus') {
        rows = 10;
        cols = 4;
        seatLayout = [
            ['A1', 'A2', 'A3', 'A4'],
            ['B1', 'B2', 'B3', 'B4'],
            ['C1', 'C2', 'C3', 'C4'],
            ['D1', 'D2', 'D3', 'D4'],
            ['E1', 'E2', 'E3', 'E4'],
            ['F1', 'F2', 'F3', 'F4'],
            ['G1', 'G2', 'G3', 'G4'],
            ['H1', 'H2', 'H3', 'H4'],
            ['I1', 'I2', 'I3', 'I4'],
            ['J1', 'J2', 'J3', 'J4']
        ];
    } else if (transport === 'plane') {
        rows = 6;
        cols = 6;
        seatLayout = [
            ['A1', 'A2', null, null, 'A3', 'A4'],
            ['B1', 'B2', null, null, 'B3', 'B4'],
            ['C1', 'C2', null, null, 'C3', 'C4'],
            ['D1', 'D2', null, null, 'D3', 'D4'],
            ['E1', 'E2', null, null, 'E3', 'E4'],
            ['F1', 'F2', null, null, 'F3', 'F4']
        ];
    } else { 
        rows = 1;
        cols = 5;
        seatLayout = [['S1', 'S2', 'S3', 'S4', 'S5']];
    }
    
    
    const mapContainer = document.createElement('div');
    mapContainer.className = 'map-container';
    
    
    if (transport === 'plane') {
        const aisle = document.createElement('div');
        aisle.className = 'aisle';
        aisle.textContent = 'Aisle';
        mapContainer.appendChild(aisle);
    }
    
    
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.className = 'seat-row';
        
        for (let j = 0; j < cols; j++) {
            if (seatLayout[i] && seatLayout[i][j]) {
                const seat = document.createElement('div');
                seat.className = 'seat available';
                seat.textContent = seatLayout[i][j];
                seat.dataset.seat = seatLayout[i][j];
                
                seat.addEventListener('click', function() {
                    toggleSeatSelection(this);
                });
                
                
                if (Math.random() < 0.3) {
                    seat.classList.remove('available');
                    seat.classList.add('booked');
                }
                
                row.appendChild(seat);
            } else if (transport === 'plane' && (j === 2 || j === 3)) {
            
                const space = document.createElement('div');
                space.className = 'aisle-space';
                row.appendChild(space);
            }
        }
        
        mapContainer.appendChild(row);
    }
    
    seatMap.appendChild(mapContainer);
}

function toggleSeatSelection(seatElement) {
    if (seatElement.classList.contains('booked')) return;
    
    if (seatElement.classList.contains('selected')) {
        seatElement.classList.remove('selected');
        seatElement.classList.add('available');
        
        
        const index = currentBooking.seats.indexOf(seatElement.dataset.seat);
        if (index > -1) {
            currentBooking.seats.splice(index, 1);
        }
    } else {
        seatElement.classList.remove('available');
        seatElement.classList.add('selected');
        
    
        currentBooking.seats.push(seatElement.dataset.seat);
    }
    

    updateSelectedSeatsInfo();
}


function updateSelectedSeatsInfo() {
    const countElement = document.getElementById('selectedSeatsCount');
    const priceElement = document.getElementById('selectedSeatsPrice');
    
    countElement.textContent = currentBooking.seats.length;
    
    
    let pricePerSeat = 0;
    if (currentBooking.transport === 'bus') {
        pricePerSeat = 650;
    } else if (currentBooking.transport === 'plane') {
        pricePerSeat = 5000;
    } else {
        pricePerSeat = 53000;
    }
    
    const totalPrice = currentBooking.seats.length * pricePerSeat;
    priceElement.textContent = totalPrice;
    
    
    document.getElementById('summarySeats').textContent = currentBooking.seats.join(', ');
    document.getElementById('summaryTotal').textContent = totalPrice;
}


function resetBookingSteps(step) {
    bookingSteps.forEach(s => s.classList.remove('active'));
    document.getElementById(`step${step}`).classList.add('active');
    
    document.querySelectorAll('.step').forEach(s => {
        s.classList.remove('active');
        if (parseInt(s.dataset.step) <= step) {
            s.classList.add('active');
        }
    });
}


function generateBookingnce() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}


navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
       
        navLinks.forEach(l => l.classList.remove('active'));
        
        
        this.classList.add('active');
        
        
        contentSections.forEach(section => section.classList.remove('active'));
        
        
        const sectionId = this.dataset.section;
        document.getElementById(sectionId).classList.add('active');
    });
});

closeModal.addEventListener('click', function() {
    destinationModal.style.display = 'none';
    bookingModal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === destinationModal) {
        destinationModal.style.display = 'none';
    }
    if (e.target === bookingModal) {
        bookingModal.style.display = 'none';
    }
});

transportTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const transport = this.dataset.transport;
        
        
        transportTabs.forEach(t => t.classList.remove('active'));
        
       
        this.classList.add('active');
        
        
        transportSections.forEach(section => section.classList.remove('active'));
        
        
        document.getElementById(`${transport}-details`).classList.add('active');
    });
});

document.querySelectorAll('.book-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const transport = this.dataset.transport;
        openBookingModal(transport);
    });
});

nextButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const nextStep = parseInt(this.dataset.next);
        
    
        if (nextStep === 2) {
            const date = document.getElementById('travelDate').value;
            if (!date) {
                alert('Please select a travel date');
                return;
            }
            currentBooking.date = date;
            document.getElementById('summaryDate').textContent = date;
        } else if (nextStep === 3) {
            if (currentBooking.seats.length === 0) {
                alert('Please select at least one seat');
                return;
            }
        } else if (nextStep === 4) {
            
            if (currentBooking.paymentMethod === 'credit') {
                const cardNumber = document.getElementById('cardNumber').value;
                const cardName = document.getElementById('cardName').value;
                const expiryDate = document.getElementById('expiryDate').value;
                const cvv = document.getElementById('cvv').value;
                
                if (!cardNumber || !cardName || !expiryDate || !cvv) {
                    alert('Please fill in all payment details');
                    return;
                }
            } else if (currentBooking.paymentMethod === 'esewa') {
                const esewaId = document.getElementById('esewaId').value;
                if (!esewaId) {
                    alert('Please enter your eSewa ID');
                    return;
                }
            }
            
            
            document.getElementById('confirmationDestination').textContent = currentBooking.destination;
        }
        
        resetBookingSteps(nextStep);
    });
});

backButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const prevStep = parseInt(this.dataset.back);
        resetBookingSteps(prevStep);
    });
});

paymentMethods.forEach(method => {
    method.addEventListener('click', function() {
        const methodType = this.dataset.method;
        currentBooking.paymentMethod = methodType;
        
        
        paymentMethods.forEach(m => m.classList.remove('active'));
        
        
        this.classList.add('active');
        
        
        paymentDetails.forEach(detail => detail.classList.remove('active'));
        
       
        document.querySelector(`.${methodType}-details`).classList.add('active');
    });
});

confirmBtn.addEventListener('click', function() {
    
    
    resetBookingSteps(4);
});

printBtn.addEventListener('click', function() {
    
    alert('Receipt printing would be implemented here');
});

doneBtn.addEventListener('click', function() {
    
    bookingModal.style.display = 'none';
    
    currentBooking = {
        ...currentBooking,
        destination: null,
        transport: null,
        date: null,
        seats: [],
        paymentMethod: 'credit'
    };
    
    
    currentBooking.reference = generateBookingReference();
    document.getElementById('bookingReference').textContent = currentBooking.reference;
});


document.addEventListener('DOMContentLoaded', init);

document.querySelector('.logout-btn a').addEventListener('click', function(e) {
    e.preventDefault();
    
    
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    
    
    window.location.href = 'index.html';
});



document.getElementById('searchBtn').addEventListener('click', function () {
    const searchText = document.getElementById('destinationSearch').value.trim().toLowerCase();
    const regionFilter = document.querySelector('.search-filter select').value;

    const cards = document.querySelectorAll('.destination-card');

    // Reset: Show all if nothing is searched and region is "all"
    if (searchText === '' && regionFilter === 'all') {
        cards.forEach(card => card.style.display = '');
        return;
    }

    cards.forEach(card => {
        const name = card.querySelector('h3').textContent.trim().toLowerCase();
        const destinationId = parseInt(card.dataset.id);
        const destination = destinations.find(d => d.id === destinationId);

        const matchesSearch = name.includes(searchText);
        const matchesRegion = regionFilter === 'all' || destination.region === regionFilter;

        if (matchesSearch && matchesRegion) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});
