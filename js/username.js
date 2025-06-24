const usernameDisplay = document.getElementById('usernameDisplay');

document.addEventListener('DOMContentLoaded', init);

function init() {
    const username = localStorage.getItem('currentUser');
    if (username) usernameDisplay.textContent = username;

    loadDestinations();

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('travelDate').min = today;

    currentBooking.reference = generateBookingReference();
    document.getElementById('bookingReference').textContent = currentBooking.reference;
}
