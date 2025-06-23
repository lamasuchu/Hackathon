
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

const destinations = [
    {
        id: 1,
        name: "Gosaikunda",
        region: "langtang",
        description: "Gosaikuda is a sacred alpine lake in the Langtang National Park at an altitude of 4,380 meters. It's a significant pilgrimage site for Hindus and offers breathtaking views of the surrounding Himalayas .",
        images: ["gosaikunda1.jpg", "gosaikunda2.jpg", "gosaikunda3.jpg"],
        rating: 4.8,
        reviews: 124,
        bus: {
            duration: "8 hours",
            price: "$15",
            condition: "Moderate, some rough patches",
            considerations: "Bring motion sickness medicine if prone to car sickness"
        },
        plane: {
            duration: "45 minutes",
            price: "$120",
            weather: "Flights may be delayed due to mountain weather",
            considerations: "Limited baggage allowance (15kg)"
        },
        helicopter: {
            duration: "30 minutes",
            price: "$300",
            capacity: "5 passengers max",
            considerations: "Highly weather dependent, book with flexibility"
        }
    },
    {
        id: 2,
        name: "Paach Pokhari",
        region: "eastern",
        description: "Paach Pokhari, meaning 'Five Ponds' in Nepali, is a group of five high-altitude lakes situated at 4,100 meters. It's a remote and pristine destination offering spectacular views of the Himalayan range.",
        images: ["paachpokhari1.jpg", "paachpokhari2.jpg", "paachpokhari3.jpg"],
        rating: 4.5,
        reviews: 87,
        bus: {
            duration: "10 hours",
            price: "$18",
            condition: "Challenging, many rough sections",
            considerations: "Not recommended during monsoon season"
        },
        plane: {
            duration: "35 minutes",
            price: "$110",
            weather: "Frequent cancellations due to weather",
            considerations: "Small aircraft only"
        },
        helicopter: {
            duration: "25 minutes",
            price: "$350",
            capacity: "4 passengers max",
            considerations: "Advance booking required"
        }
    },
    {
        id: 3,
        name: "Annapurna Base Camp",
        region: "annapurna",
        description: "Annapurna Base Camp (4,130m) offers one of the most spectacular mountain panoramas in the world, with views of Annapurna I, Machapuchare, Hiunchuli, and other peaks.",
        images: ["annapurna1.jpg", "annapurna2.jpg", "annapurna3.jpg"],
        rating: 4.9,
        reviews: 215,
        bus: {
            duration: "6 hours to starting point",
            price: "$12",
            condition: "Good road to Pokhara, then trek",
            considerations: "Multi-day trek required after bus ride"
        },
        plane: {
            duration: "25 minutes to Pokhara",
            price: "$90",
            weather: "Generally reliable",
            considerations: "Still requires several days of trekking"
        },
        helicopter: {
            duration: "45 minutes",
            price: "$500",
            capacity: "5 passengers max",
            considerations: "Can land near base camp in good weather"
        }
    },
    {
        id: 4,
        name: "Kori Mardi",
        region: "annapurna",
        description: "Kori Mardi is a stunning viewpoint in the Annapurna region offering magnificent views of Machapuchare (Fishtail Mountain) and the Annapurna range. It's a less crowded alternative to Poon Hill.",
        images: ["korimardi1.jpg", "korimardi2.jpg", "korimardi3.jpg"],
        rating: 4.6,
        reviews: 76,
        bus: {
            duration: "6 hours to starting point",
            price: "$12",
            condition: "Good road to Pokhara, then trek",
            considerations: "Requires 3-4 days of trekking"
        },
        plane: {
            duration: "25 minutes to Pokhara",
            price: "$90",
            weather: "Generally reliable",
            considerations: "Still requires trekking"
        },
        helicopter: {
            duration: "40 minutes",
            price: "$450",
            capacity: "5 passengers max",
            considerations: "Can land nearby in good weather"
        }
    },
    {
        id: 5,
        name: "Langtang Valley",
        region: "langtang",
        description: "Langtang Valley, often called the 'valley of glaciers', offers beautiful landscapes, rich Tamang culture, and relatively easy access from Kathmandu. The valley was affected by the 2015 earthquake but has largely recovered.",
        images: ["langtang1.jpg", "langtang2.jpg", "langtang3.jpg"],
        rating: 4.7,
        reviews: 142,
        bus: {
            duration: "7 hours",
            price: "$14",
            condition: "Moderate, some rough sections",
            considerations: "Road goes up to Syabrubesi, trek required"
        },
        plane: {
            duration: "N/A",
            price: "N/A",
            weather: "N/A",
            considerations: "No direct flight service"
        },
        helicopter: {
            duration: "35 minutes",
            price: "$400",
            capacity: "5 passengers max",
            considerations: "Can land in Kyanjin Gompa in good weather"
        }
    },
    {
        id: 6,
        name: "Everest Base Camp",
        region: "everest",
        description: "The trek to Everest Base Camp (5,364m) is one of the most famous in the world, offering incredible views of Mt. Everest and other 8,000m peaks. The journey takes you through Sherpa villages and Buddhist monasteries.",
        images: ["everest1.jpg", "everest2.jpg", "everest3.jpg"],
        rating: 4.9,
        reviews: 298,
        bus: {
            duration: "10 hours to starting point",
            price: "$20",
            condition: "Long and tiring road to Salleri or Jiri",
            considerations: "Adds several days to the trek"
        },
        plane: {
            duration: "45 minutes to Lukla",
            price: "$180",
            weather: "Frequently delayed due to weather",
            considerations: "Small aircraft, strict baggage limits"
        },
        helicopter: {
            duration: "1 hour to base camp",
            price: "$800",
            capacity: "5 passengers max",
            considerations: "Can land at base camp in good conditions"
        }
    },
    {
        id: 7,
        name: "Badimalika",
        region: "western",
        description: "Badimalika is a sacred temple located at 4,200 meters in the Bajura district. It's an important pilgrimage site with stunning mountain views and a unique cultural experience in far-western Nepal.",
        images: ["badimalika1.jpg", "badimalika2.jpg", "badimalika3.jpg"],
        rating: 4.3,
        reviews: 53,
        bus: {
            duration: "18 hours",
            price: "$25",
            condition: "Very challenging, rough roads",
            considerations: "Not recommended in monsoon or winter"
        },
        plane: {
            duration: "1 hour to nearby airport",
            price: "$150",
            weather: "Unpredictable, frequent cancellations",
            considerations: "Still requires long jeep ride"
        },
        helicopter: {
            duration: "1.5 hours",
            price: "$600",
            capacity: "5 passengers max",
            considerations: "Only practical option for many visitors"
        }
    },
    {
        id: 8,
        name: "Ghandruk-Poonhill",
        region: "annapurna",
        description: "The Ghandruk-Poonhill trek is one of Nepal's most popular short treks, offering magnificent views of Annapurna South, Hiunchuli, and Machapuchare, along with rich Gurung culture.",
        images: ["ghandruk1.jpg", "ghandruk2.jpg", "ghandruk3.jpg"],
        rating: 4.8,
        reviews: 187,
        bus: {
            duration: "6 hours to starting point",
            price: "$12",
            condition: "Good road to Nayapul",
            considerations: "Classic 4-5 day trek"
        },
        plane: {
            duration: "25 minutes to Pokhara",
            price: "$90",
            weather: "Generally reliable",
            considerations: "Still requires drive to trek start"
        },
        helicopter: {
            duration: "35 minutes",
            price: "$400",
            capacity: "5 passengers max",
            considerations: "Can land in Ghandruk in good weather"
        }
    },
    {
        id: 9,
        name: "Lower Mustang",
        region: "mustang",
        description: "Lower Mustang, the gateway to the Upper Mustang restricted area, features dramatic arid landscapes, Tibetan-influenced culture, and the famous Muktinath Temple at 3,800 meters.",
        images: ["mustang1.jpg", "mustang2.jpg", "mustang3.jpg"],
        rating: 4.7,
        reviews: 134,
        bus: {
            duration: "10 hours to Pokhara, then more",
            price: "$25",
            condition: "Long journey with rough sections",
            considerations: "Multi-day trek required"
        },
        plane: {
            duration: "20 minutes to Jomsom",
            price: "$120",
            weather: "Frequently windy, morning flights best",
            considerations: "Special permit required for Mustang"
        },
        helicopter: {
            duration: "1 hour",
            price: "$550",
            capacity: "5 passengers max",
            considerations: "Can land in Jomsom or Muktinath"
        }
    },
    {
        id: 10,
        name: "Kanchenjunga",
        region: "eastern",
        description: "The Kanchenjunga region offers one of Nepal's most remote and spectacular treks to the base camp of the world's third highest mountain. The area is rich in biodiversity and traditional cultures.",
        images: ["kanchenjunga1.jpg", "kanchenjunga2.jpg", "kanchenjunga3.jpg"],
        rating: 4.6,
        reviews: 89,
        bus: {
            duration: "16 hours to starting point",
            price: "$22",
            condition: "Very challenging roads",
            considerations: "Long, demanding 3-week trek required"
        },
        plane: {
            duration: "1 hour to Taplejung",
            price: "$140",
            weather: "Unpredictable, frequent cancellations",
            considerations: "Still requires long trek"
        },
        helicopter: {
            duration: "1.5 hours",
            price: "$700",
            capacity: "5 passengers max",
            considerations: "Special permit required, expensive"
        }
    }
];

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

function loadDestinations() {
    destinationGrids.forEach(grid => {
        grid.innerHTML = '';
        
        destinations.forEach(destination => {
            const card = document.createElement('div');
            card.className = 'destination-card';
            card.dataset.id = destination.id;
            
            card.innerHTML = `
                <div class="destination-image">
                    <img src="images/${destination.images[0]}" alt="${destination.name}">
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
    
    
    const mainImage = document.getElementById('modalMainImage');
    mainImage.src = `images/${destination.images[0]}`;
    mainImage.alt = destination.name;
    
    
    const thumbnailsContainer = document.querySelector('.thumbnail-images');
    thumbnailsContainer.innerHTML = '';
    
    destination.images.forEach((image, index) => {
        const thumb = document.createElement('img');
        thumb.src = `images/${image}`;
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
        pricePerSeat = 15;
    } else if (currentBooking.transport === 'plane') {
        pricePerSeat = 120;
    } else {
        pricePerSeat = 300;
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

function generateBookingReference() {
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

    window.location.href = 'homepage.html';
});