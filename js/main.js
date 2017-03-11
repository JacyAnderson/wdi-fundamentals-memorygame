var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


//function checks for match
var checkForMatch = function(){
	if(cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
				alert("You found a match!");
			} else {
				alert("Sorry, try again.");
			}
		}
	};


//function tells which card user flipped, pushes to cardsInPlay array
var flipCard = function(cardId){
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}
flipCard(0);
flipCard(2);





