var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];


//function checks for match
var checkForMatch = function(idPassedIn){
	
////!!!!! this is where the consoles logs a problem
	
	if(cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
				alert("You found a match!");
			} else {
				alert("Sorry, try again.");
			}
		}
	};


//function tells which card user flipped, pushes to cardsInPlay array
var flipCard = function(){
	//establishing cardId var by finding index in cards array for clicked card
	var cardId = this.getAttribute('data-id');
	// - gathers img for clicked card
	this.setAttribute('src', cards[cardId].cardImage);
	//logs which card has been flipped to console
	console.log("User flipped " + cards[cardId].rank);
	//pushes the rank of clicked card to var cardsInPlay
	cardsInPlay.push(cards[cardId].rank);
	//runs function checkForMatch
	checkForMatch();
	
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}
var createBoard = function() {
	for ( var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
};

createBoard();







