

// creating a playing card deck

function card(location, value, suit){
	this.location=location;
	this.value = value;
	this.suit = suit;
}

function deck(){
	var cardSet = [];

	this.value = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var placeIt=0;
    
    for( var i = 0; i < this.suits.length; i++ ) {

        for( var x = 0; x < this.value.length; x++ ) {

            cardSet.push( new card( placeIt, this.value[x], this.suits[i] ) );
            placeIt++;
        }
    }

    return cardSet;
}

var myFirstDeck = new deck();
console.log('First Card on my deck')
console.log(myFirstDeck[0]);



/// Dice Game....

function die(sides){
	this.sides=sides;
}

die.prototype.roll = function() {
  return Math.floor((Math.random()*this.sides)+1);
}

function getProbabilities(numberOfRolls){
	var die1= new die(6);
	var die2= new die(6);
	var rollsValue = [];
	
	for(i=0; i<numberOfRolls; i++){
		rollsValue.push(parseInt(die1.roll()+die2.roll()));
	}

	var prb =[2,3,4,5,6,7,8,9,10,11,12];
	var occurance = [];
	
	
	for (var y=0; y<prb.length; y++){
		var counter2 = 0;
		for (var x=0; x<rollsValue.length; x++){
			if (rollsValue[x]=== prb[y]){
				counter2++;
			}
		
		}
		occurance.push(counter2);
	}
	return occurance;
}

console.log('\n \n \nThis is the probabilities Array')
console.log(getProbabilities(1000));





//Adventure mode for the deck card



deck.shuffle= function(){
	var deckRandom = new deck();
	var newDeck=[];
	var randomNum=0;
	var i = deck.length;
	
	while (newDeck.length<52){
			randomNum=parseInt(Math.random()*52);
			if(deckRandom[randomNum]){
				newDeck.push(deckRandom[randomNum]);
			}
			delete deckRandom[randomNum];
			
		}
		return newDeck;

}

var myFirstDeckShuffled = new deck.shuffle();
console.log('\n \n \n This is my Shuffled card');
console.log( myFirstDeckShuffled[0]);


	


	












