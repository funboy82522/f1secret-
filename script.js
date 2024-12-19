function openGame(event, url) {
    event.preventDefault(); // Prevent default anchor click behavior
    window.open(url, '_blank'); // Open the game link in a new tab
}

function searchGames() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const gameCards = document.querySelectorAll(".game-card");

    gameCards.forEach(card => {
        const title = card.querySelector(".button-title").textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = "block"; // Show if it matches
        } else {
            card.style.display = "none"; // Hide if it doesn't match
        }
    });
}
