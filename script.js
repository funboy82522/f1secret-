// script.js

function openGame(event, url) {
    event.preventDefault();  // Prevent default anchor behavior
    window.open(url, '_blank');  // Open the game link in a new tab
    setTimeout(() => {
        window.open('about:blank', '_blank');  // Open a blank page
    }, 100);  // Small delay to ensure the previous action executes
}

function searchGames() {
    const input = document.getElementById('searchBar').value.toLowerCase(); // Get the input value
    const gameCards = document.querySelectorAll('.game-card'); // Get all game cards

    gameCards.forEach(card => {
        const title = card.querySelector('.button-title').textContent.toLowerCase(); // Get the title of the game
        if (title.includes(input)) {
            card.style.display = ''; // Show the game card
        } else {
            card.style.display = 'none'; // Hide the game card
        }
    });
}
