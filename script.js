// script.js

function openGame(event, url) {
    event.preventDefault(); 
    window.open(url, '_blank');  
    setTimeout(() => {
        window.open('about:blank', '_blank');  
    }, 100);  
}

function searchGames() {
    const input = document.getElementById('searchBar').value.toLowerCase(); 
    const gameCards = document.querySelectorAll('.game-card'); 

    gameCards.forEach(card => {
        const title = card.querySelector('.button-title').textContent.toLowerCase(); 
        if (title.includes(input)) {
            card.style.display = ''; 
        } else {
            card.style.display = 'none'; 
        }
    });
}
