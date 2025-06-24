const suggestionForm = document.getElementById('suggestionForm');
const thankYouMessage = document.getElementById('thankYouMessage');

if (suggestionForm) {
    suggestionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        const name = document.getElementById('suggestionName').value;
        const email = document.getElementById('suggestionEmail').value;
        const message = document.getElementById('suggestionMessage').value;
        
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        suggestionForm.style.display = 'none';
        thankYouMessage.style.display = 'block';
        
        suggestionForm.reset();
        
        setTimeout(() => {
            thankYouMessage.style.display = 'none';
            suggestionForm.style.display = 'block';
        }, 5000);
    
        const suggestions = JSON.parse(localStorage.getItem('suggestions') || '[]');
        suggestions.push({
            name,
            email,
            message,
            date: new Date().toISOString()
        });
        localStorage.setItem('suggestions', JSON.stringify(suggestions));
    });
}
