document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    
    if(username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password');
        return;
    }
    
    
    localStorage.setItem('currentUser', username);
    

    window.location.href = 'home.html';
});
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password');
        return;
    }
    
    
    localStorage.setItem('currentUser', username);
    localStorage.setItem('isLoggedIn', 'true');
    

    window.location.href = 'home.html';
});