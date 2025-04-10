function showMarketStatus() {
    document.getElementById('market-status').style.display = 'block';
}
var display = 0;
const div = document.getElementsByClassName('main');

function toggleMarketStatus() {
    let mainDiv = document.querySelector('.main'); 
    let marketDiv = document.getElementById('market-status');

    if (marketDiv.style.display === 'none' || marketDiv.style.display === '') {
        marketDiv.style.display = 'block';
        mainDiv.style.display = 'none';
    } else {
        marketDiv.style.display = 'none';
        mainDiv.style.display = 'block';
    }
}

function searchCards() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].textContent.toLowerCase();
        if (text.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}
