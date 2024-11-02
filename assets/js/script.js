let score = 0;

// Function to initialize the score from localStorage
function initializeScore() {
    const savedScore = localStorage.getItem('userScore');
    if (savedScore !== null) {
        score = parseInt(savedScore, 10);
    }
    document.getElementById('score').innerText = `Score: ${score}`;
}

// Function to add points and save to localStorage
function addPoints() {
    const points = Math.floor(Math.random() * 11) + 5;
    score += points;
    document.getElementById('score').innerText = `Score: ${score}`;
    localStorage.setItem('userScore', score); // Save score to localStorage
}

// Initialize the score when the page loads
initializeScore();
