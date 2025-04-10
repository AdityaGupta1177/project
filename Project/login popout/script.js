let boxCards = document.querySelector('.login_box_cards');
let farmerOptions = document.querySelector('.farmer_options');
let buyerOptions = document.querySelector('.buyer_options');
let nextBtn = document.querySelector(".btn");
let backBtn = document.querySelector(".btn1");

let selectedOption = "";


farmerOptions.style.display = "none";
buyerOptions.style.display = "none";

document.querySelectorAll(".cards").forEach((card, index) => {
    card.addEventListener("click", function() {
        if (index === 0) {
            selectedOption = "farmer";
        } else {
            selectedOption = "buyer";
        }
        console.log("Selected:", selectedOption);
    });
});

function change(selectedCard) {
    document.querySelectorAll('.farmer_options_cards').forEach(card => {
        card.classList.remove('selected');
    });
    selectedCard.classList.add('selected');
}

function change1(selectedCard1){
    document.querySelectorAll('.cards').forEach(card =>{
        card.classList.remove('selected1');
    });
    selectedCard1.classList.add('selected1');
}

function change2(selectedCard2){
    document.querySelectorAll('.buyer_options_cards').forEach(card =>{
        card.classList.remove('selected2');
    })
    selectedCard2.classList.add('selected2');
}

nextBtn.addEventListener("click", function () {
    boxCards.style.display = "none"; 

    if (selectedOption === "farmer") {
        farmerOptions.style.display = "flex"; 
        buyerOptions.style.display = "none";
    } else if (selectedOption === "buyer") {
        buyerOptions.style.display = "flex"; 
        farmerOptions.style.display = "none";
    }
    else{
        boxCards.style.display = "flex";
    }
});


backBtn.addEventListener("click", function () {
    boxCards.style.display = "flex"; 
    farmerOptions.style.display = "none";
    buyerOptions.style.display = "none";
    selectedOption = "";
});

