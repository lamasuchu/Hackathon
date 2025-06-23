document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if(username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password');
        return;
    }
    
    // Store username in localStorage for use in main page
    localStorage.setItem('currentUser', username);
    
    // Redirect to main page
    window.location.href = 'home.html';
});
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password');
        return;
    }
    
    // Store username and login status
    localStorage.setItem('currentUser', username);
    localStorage.setItem('isLoggedIn', 'true');
    
    // Redirect to home page
    window.location.href = 'home.html';
});