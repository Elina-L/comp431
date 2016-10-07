window.onload = function() {
	var score = document.getElementById("score");
	newGame();
}
var startDate = new Date();
var startTime = startDate.getTime();
var timer = setInterval(function() { timeSpent() }, 1000);
var gameStyle = 0;

// Initializes an ordered array.
var orderArray = 
[ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]

// Path of the images
var path = "playing-cards-assets-master/atlas-svg/"

/**
 * Shuffle a given array. Credit: Fisher-Yates (aka Knuth) Shuffle.
 */
function shuffleArray(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
  	// While there remain elements to shuffle...
  	while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

/**
 * Change game style.
 */
function changeGame(num) {
	var gameDescription = document.getElementById("gameDescription");
	gameStyle = num;
	var btns = document.getElementsByClassName("btn-info");
	for (btn of btns) {
		btn.classList.remove("active");
	}
	btns[num].classList.add("active");
	newGame();
}
/**
 * Arranges the cards nicely. Then loads id and background-image urls into img.
 */
function newGame() {
	var congrats = document.getElementById("winMsg");
	congrats.style.display = "none";
	startDate = new Date();
	startTime = startDate.getTime();
	updateScore(-999999);
	var idNum = 0;
	var randArray = shuffleArray(orderArray);
	// First, need to clear the board
	var listOfPiles = ["stock-wrapper", "hand-wrapper", 
	"foundation1-wrapper", "foundation2-wrapper", "foundation3-wrapper", 
	"foundation4-wrapper", "tableaus1-wrapper", "tableaus2-wrapper", 
	"tableaus3-wrapper", "tableaus4-wrapper", "tableaus5-wrapper", 
	"tableaus6-wrapper", "tableaus7-wrapper"]

	for (id of listOfPiles) {
		var pile = document.getElementById(id);
		while (pile.firstChild) {
			pile.removeChild(pile.firstChild);
		}
	}
	// Add to stock
	var stock = document.getElementById("stock-wrapper");
	var checkEmpty = document.createElement("div");
	checkEmpty.setAttribute("id", "checkEmpty");
	checkEmpty.setAttribute("ondblclick", "restackCards()");
	stock.appendChild(checkEmpty);
	var numStock = 24;
	if (gameStyle == 2) {
		numStock = 36;
	}
	for (var i = 0; i < numStock; i++) {
		var stockCard = document.createElement("img");
		stockCard.classList.add("covered");
		stockCard.classList.add("card");
		stockCard.setAttribute("ondragstart", "drag(event)");
		stockCard.setAttribute("src", "");
		stock.appendChild(stockCard);
	}
	// Add the image sources to the cards, and the attributes
	for (var card of stock.children) {
		if (card.tagName == "IMG") {
			var index = randArray[idNum]			
			var key = Object.keys(deckOfCards)[index];
			card.id = key;
			card.src = path + deckOfCards[key] + '.png';
			card.addEventListener("click", uncover, true);
			idNum++;

		}
	}
	// Add to the tableaus
	var tableausWrapper = document.getElementById("tableaus");
	var count = 1;
	for (tableau of tableausWrapper.children) {
		var top = 0;
		// Add tableau cards to tableau
		if (gameStyle == 2) {
			count1 = count/2;
		} else {
			count1 = count;
		}
		for (var i = 0; i < count1; i++) {
			// Create Tableau card
			var tableauCard = document.createElement("img");
			tableauCard.classList.add("card");
			tableau.appendChild(tableauCard);
			tableauCard.setAttribute("ondblclick", "checkCard(event)");
			tableauCard.setAttribute("ondragstart", "drag(event)");
			tableauCard.setAttribute("draggable", "true");
			tableauCard.setAttribute("src", "");
		}
		count++;
		for (var card of tableau.children) {
			if (card.nextElementSibling !== null) {
				card.classList.add("covered");
			}
			card.style.top = top + "px";
			top += 20;
			var index = randArray[idNum]
			var key = Object.keys(deckOfCards)[index];
			card.id = key;
			card.src = path + deckOfCards[key] + '.png'
			idNum++;
		}
		// Clears previous timer
		clearInterval(timer);
		clearInterval(timer);
		var time = document.getElementById("time");
		time.innerHTML = "0:00";
		// Starts recursive timer
		timer = setInterval(function() { timeSpent() }, 1000);
	}
}

var deckOfCards = new Map();
deckOfCards = {
	clubs_1: 	"ace_of_clubs", 	diamonds_1: "ace_of_diamonds",
	hearts_1: 	"ace_of_hearts", 	spades_1: 	"ace_of_spades",	
	clubs_2: 	"2_of_clubs", 		diamonds_2: "2_of_diamonds",
	hearts_2: 	"2_of_hearts", 		spades_2: 	"2_of_spades",	
	clubs_3: 	"3_of_clubs", 		diamonds_3: "3_of_diamonds",
	hearts_3: 	"3_of_hearts", 		spades_3: 	"3_of_spades",
	clubs_4: 	"4_of_clubs",		diamonds_4: "4_of_diamonds",
	hearts_4: 	"4_of_hearts", 		spades_4: 	"4_of_spades",
	clubs_5: 	"5_of_clubs", 		diamonds_5: "5_of_diamonds",
	hearts_5: 	"5_of_hearts", 		spades_5: 	"5_of_spades",
	clubs_6: 	"6_of_clubs", 		diamonds_6: "6_of_diamonds",
	hearts_6: 	"6_of_hearts", 		spades_6: 	"6_of_spades",
	clubs_7: 	"7_of_clubs", 		diamonds_7: "7_of_diamonds",
	hearts_7: 	"7_of_hearts", 		spades_7: 	"7_of_spades",
	clubs_8: 	"8_of_clubs", 		diamonds_8: "8_of_diamonds",
	hearts_8: 	"8_of_hearts", 		spades_8: 	"8_of_spades",
	clubs_9: 	"9_of_clubs", 		diamonds_9: "9_of_diamonds",
	hearts_9: 	"9_of_hearts", 		spades_9: 	"9_of_spades",
	clubs_10: 	"10_of_clubs", 		diamonds_10: 	"10_of_diamonds",
	hearts_10: 	"10_of_hearts", 	spades_10: 		"10_of_spades",
	clubs_11: 	"jack_of_clubs", 	diamonds_11: 	"jack_of_diamonds",
	hearts_11: 	"jack_of_hearts", 	spades_11: 		"jack_of_spades",
	clubs_12: 	"queen_of_clubs",	diamonds_12: 	"queen_of_diamonds",
	hearts_12: 	"queen_of_hearts",	spades_12: 		"queen_of_spades",
	clubs_13: 	"king_of_clubs",	diamonds_13: 	"king_of_diamonds",
	hearts_13: 	"king_of_hearts",	spades_13: 		"king_of_spades",
};

/**
 * Parses the card value and suite when
 * given the id of the card.
 */
function parseCard(card) {
	var suiteVal = {}
	var cardId = card.id;
	var color;
	var cardInfo = cardId.split("_");
	if (cardInfo[0] == "diamonds" || cardInfo[0] == "hearts") {
		color = 0;
	} else {
		color = 1;
	}
	var val = parseInt(cardInfo[1]);
	suiteVal["color"] = color;
	suiteVal["val"] = val;
	suiteVal["suite"] = cardInfo[0];
	return suiteVal;
} 

/**
 * Prevents default behaviour (mouse icon) when dropping.
 */
function allowDrop(ev) {
    ev.preventDefault();
}

/**
 * Checks to see if the card can be placed on one of the foundations.
 */
function checkCard(ev) {
	var foundations = document.getElementById("foundations");
	if (ev.target.nextElementSibling == null && 
		!(ev.target.parentNode.classList.contains("foundation"))
	 && !(ev.target.parentNode.classList.contains("stock"))) {
		var suiteValue = parseCard(ev.target);
		var color = suiteValue.color;
		var val = suiteValue.val;
		var suite = suiteValue.suite;
		for (var child of foundations.children) {
			// Special case, if the value is Ace, then add it anywhere
			if (val == 1) {
				if (child.children.length == 0) {
					if (ev.target.previousElementSibling !== null && 
						ev.target.previousElementSibling.classList
							.contains("covered")) {
						ev.target.previousElementSibling.classList
							.remove("covered");
						updateScore(2);
					}
					child.appendChild(ev.target);
					updateScore(5);
					ev.target.style.top = 0;
					break
				}
			} else {
			 // Else, need to look the foundation piles, find the pile for
			 // the corresponding suite, and check the values.
				if (child.children.length > 0) {
					var pileSuiteValue = parseCard(child.children[child.children
						.length - 1]);
					if (pileSuiteValue.suite == suite && 
						pileSuiteValue.val == val - 1) {
						if (ev.target.previousElementSibling !== null && 
							ev.target.previousElementSibling.classList
								.contains("covered")) {
							ev.target.previousElementSibling.classList
								.remove("covered");
							updateScore(2);
						}
						child.appendChild(ev.target);
						updateScore(5);
						ev.target.style.top = 0;
						break;
					}
				}
			}
		}
	}
	// Check to see if all cards have been added into foundations.
	checkFinish();
}


/**
 * Drag card function.
 */
function drag(ev) {
 	var idList = [];
 	var id = String(ev.target.id);

 	idList.push(id)
    var card = ev.target;
    var idListFinal = checkNext(card, idList);
    ev.dataTransfer.setData("text", idListFinal);
}

/**
 * Checks if there are next siblings, returns list of next siblings.
 */
function checkNext(card, idList) {
	if (card.nextElementSibling != null) {
    	var idNext = String(card.nextElementSibling.id);
    	idList.push(idNext);
		checkNext(card.nextElementSibling, idList);		
	}
	return idList;
}

/**
 * When clicking on stock, moves it to hand.
 */
function uncover(ev) {
	if (ev.target.parentNode.classList.contains("stock")) {
		var handCards = document.getElementById("hand-wrapper");
		handCards.appendChild(ev.target);
		ev.target.classList.remove("covered");
		ev.target.addEventListener("dblclick", checkCard, true);
		ev.target.draggable = "true";		
	}
}

/**
 * Does logic to see if a card can be dropped onto foundations.
 */
function dropOver(ev) {
    ev.preventDefault();
    var idList = ev.dataTransfer.getData("text");
	var idList2 = idList.split(",");
	// Only allow ace if dragging onto DIV
	if (ev.target.tagName == "DIV") {
		card = document.getElementById(idList2[0]);
		cardSuiteVal = parseCard(card)
		if (cardSuiteVal.val == 1) {
			if (card.previousElementSibling !== null && card
					.previousElementSibling.classList.contains("covered")) {
				card.previousElementSibling.classList.remove("covered");
				updateScore(2);
			}
			if (!(card.parentNode.classList.contains("foundation"))) {
				updateScore(5);
			}
			ev.target.appendChild(card)
			card.style.top = 0;		

		}
	} else if (ev.target.tagName == "IMG") {
	// Only allow same suite +1 if dragging onto IMG
		card = document.getElementById(idList2[0]);
		cardSuiteVal = parseCard(card)
		targetSuiteVal = parseCard(ev.target);
		if (cardSuiteVal.suite == targetSuiteVal.suite && cardSuiteVal.val == 
			targetSuiteVal.val + 1) {
			if (card.previousElementSibling !== null && card
					.previousElementSibling.classList.contains("covered")) {
				card.previousElementSibling.classList.remove("covered");
				updateScore(2);
			}
			ev.target.parentNode.appendChild(card)
			updateScore(5);
			card.style.top = 0;					
		} 
	}
	checkFinish();
}

/**
 * Updates the score of the game.
 */
function updateScore(num) {
	score.innerHTML = parseInt(score.innerHTML) + num;
	if (score.innerHTML < 0) {
		score.innerHTML = 0;
	}
}

/**
 * Does logic to see if card can be placed on a pile in the tableau.
 */
function drop(ev) {
    ev.preventDefault();
    var idList = ev.dataTransfer.getData("text");
	var idList2 = idList.split(",");
	var top = 0;
	var drop = false;
	if (!ev.target.classList.contains("covered")) {
		// First adding to an image
		var data = idList2[0];
		var firstCard = document.getElementById(data);
		var suiteVal = parseCard(firstCard);
		var addToCard = ev.target;
		var addToSuiteVal = parseCard(addToCard);
		var previousCard = firstCard.previousElementSibling;
		if (addToCard.tagName =="IMG" &&　
			((gameStyle == 0 && suiteVal.color != addToSuiteVal.color) 
				|| (gameStyle == 1 && suiteVal.color == addToSuiteVal.color) 
				|| (gameStyle == 2 && 
				((suiteVal.suite == "spades" && addToSuiteVal.suite == "hearts")
				|| !(addToSuiteVal.suite == "hearts")
				))) && 
			suiteVal.val == addToSuiteVal.val - 1 && addToCard
				.nextElementSibling == null) {
			for (var data1 of idList2) {

				var card = document.getElementById(data1)
				// Move this to where only the card is dropped successfully
				drop = true;
				if (card.previousElementSibling !== null) {
					if (card.parentNode.classList.contains("hand")) {
						updateScore(3);
					}
					if (card.parentNode.classList.contains("foundation")) {
						updateScore(-10);
					}
					ev.target.parentNode.appendChild(card)
					card.style.top = 
							parseInt(card.previousElementSibling.style.top
								.slice(0,-2)) 
							+ 30 + "px";
					card.removeEventListener("click", uncover, true);
					card.addEventListener("dblclick", checkCard, true);
				} else {
					if (card.parentNode.classList.contains("hand")) {
						updateScore(3);
					}
					if (card.parentNode.classList.contains("foundation")) {
						updateScore(-15);
					}
					ev.target.parentNode.appendChild(card)
					card.style.top = 
							parseInt(card.previousElementSibling.style.top
								.slice(0,-2)) 
							+ 30 + "px";
					card.removeEventListener("click", uncover, true);
					card.addEventListener("dblclick", checkCard, true);
				}
			}
			if (previousCard !== null && previousCard.classList
				.contains("covered")) {
				previousCard.classList.remove("covered");
				updateScore(2);
			}
			// Else if there are no previous elements, then only allow king
		} else if (addToCard.tagName == "DIV") {
			if (suiteVal.val == 13) {
				drop = true;
				for (var data of idList2) {
					var card = document.getElementById(data);
					if (card.parentNode.classList.contains("hand")) {
						updateScore(3);
					}
					if (card.parentNode.classList.contains("foundation")) {
						updateScore(-15);
					}
					ev.target.appendChild(card)
					if (card.previousElementSibling == null) {
						card.style.top = 0;
					} else {
						card.style.top = 
							parseInt(card.previousElementSibling.style.top
								.slice(0,-2))
							+ 30 + "px";
					}
					card.removeEventListener("click", uncover, true);
					card.addEventListener("dblclick", checkCard, true);
				}
				if (previousCard !== null && previousCard.classList
					.contains("covered")) {
					previousCard.classList.remove("covered");
					updateScore(2);
				}
			}
		}
	} 
}

/**
 * Once all the cards in the stock have been uncovered, restack cards from 
 * waste and hand. Also turns over all uncovered cards.
 */
function restackCards() {
	var pile = document.getElementById("stock-wrapper")
	if (pile.children.length == 1) {
		var hand = document.getElementById("hand-wrapper")
		var cardList = [];
		for (var card of hand.children) {
			cardList.push(card.id);
		}
		for (var i = cardList.length - 1; i >= 0; i--) {
			var id = cardList[i];
			var card = document.getElementById(id);
			card.removeEventListener("dblclick", checkCard, true);
			card.addEventListener("click", uncover, true);
			card.classList.add("covered");
			pile.appendChild(card);
			card.setAttribute('draggable', false);
		}
		updateScore(-50);
	}
}

/**
 * Counts the cards in foundations, check to see if the game has been completed.
 * If completed, then animates the cards.
 */
function checkFinish() {
	// Count the cards in foundation
	var count = 0;
	var foundations = document.getElementById("foundations")
	for (var foundation of foundations.childNodes) {
		for (var card of foundation.childNodes) {
			count++
		}
	}
	if (count == 52) {
		// Clear the timer interval
		clearInterval(timer);
		var congrats = document.getElementById("winMsg");
		congrats.style.display = "block";
		var hiScore = document.getElementById("hiScore");
		if (hiScore.innerHTML < score.innerHTML) 
			{ hiScore.innerHTML = score.innerHTML }
	}
}

/**
 * Function which keeps track of seconds passed.
 */
function seconds_elapsed() {
	var dateNow = new Date(); 
	var timeNow = dateNow.getTime(); 
	var timeDiff = timeNow - startTime; 
	var seconds_elapsed = Math.floor( timeDiff / 1000 ); 
	return ( seconds_elapsed ); 
}

/**
 * Takes the seconds passed and converts to minutes and seconds.
 */
function timeSpent() {
	var secs = seconds_elapsed();
	var mins = Math.floor(secs / 60);
	secs -= mins * 60;
	if (secs < 10) {
		secs = "0" + secs;
	}
	var time = document.getElementById("time");
	time.innerHTML = mins + ":" + secs;
}