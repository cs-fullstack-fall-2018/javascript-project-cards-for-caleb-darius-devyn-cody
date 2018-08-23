function deck() {
    const cards = [
        { cardNumber: 6, type: 'h' },
        { cardNumber: 9, type: 'd' },
        { cardNumber: 2, type: 'h' },
        { cardNumber: 9, type: 'h' },
        { cardNumber: 14, type: 'h' },
        { cardNumber: 6, type: 'c' },
        { cardNumber: 2, type: 'd' },
        { cardNumber: 9, type: 's' },
        { cardNumber: 12, type: 'h' },
        { cardNumber: 10, type: 'c' },
        { cardNumber: 14, type: 'c' },
        { cardNumber: 7, type: 'd' },
        { cardNumber: 3, type: 's' },
        { cardNumber: 8, type: 'd' },
        { cardNumber: 12, type: 's' },
        { cardNumber: 7, type: 's' },
        { cardNumber: 7, type: 'c' },
        { cardNumber: 14, type: 'd' },
        { cardNumber: 11, type: 'c' },
        { cardNumber: 10, type: 's' },
        { cardNumber: 11, type: 'd' },
        { cardNumber: 4, type: 'd' },
        { cardNumber: 2, type: 's' },
        { cardNumber: 7, type: 'h' },
        { cardNumber: 14, type: 's' },
        { cardNumber: 10, type: 'h' },
        { cardNumber: 5, type: 'c' },
        { cardNumber: 12, type: 'c' },
        { cardNumber: 6, type: 's' },
        { cardNumber: 5, type: 's' },
        { cardNumber: 12, type: 'd' },
        { cardNumber: 4, type: 'h' },
        { cardNumber: 11, type: 'h' },
        { cardNumber: 13, type: 'c' },
        { cardNumber: 5, type: 'h' },
        { cardNumber: 6, type: 'd' },
        { cardNumber: 13, type: 's' },
        { cardNumber: 13, type: 'd' },
        { cardNumber: 8, type: 'c' },
        { cardNumber: 4, type: 's' },
        { cardNumber: 13, type: 'h' },
        { cardNumber: 2, type: 'c' },
        { cardNumber: 8, type: 's' },
        { cardNumber: 10, type: 'd' },
        { cardNumber: 3, type: 'c' },
        { cardNumber: 3, type: 'h' },
        { cardNumber: 11, type: 's' },
        { cardNumber: 8, type: 'h' },
        { cardNumber: 9, type: 'c' },
        { cardNumber: 5, type: 'd' },
        { cardNumber: 3, type: 'd' },
        { cardNumber: 4, type: 'c' } ];

    var player1Deck = [];
    var player2Deck = [];

    player1Deck = cards.slice();
    player2Deck = player1Deck.splice(1, 26);

    scoring(player1Deck[0].cardNumber,player2Deck[0].cardNumber);
    player1Deck.shift();
    player2Deck.shift();

}
function newSet(){
    var cards = new Array();
    var typeArray = ["s", "d", "c", "h"];
    var cardNumberArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];

    for(let i=0; i <typeArray.length; i++)
    {
        for(let x=0; x <cardNumberArray.length; x++)
        {
            let card = {cardNumber: cardNumberArray[x], type: typeArray[i]};
            cards.push(card);
        }
    }

    for (var i=0; i < 10000; i++)
    {
        let rand1 = Math.floor((Math.random() * cards.length));
        let rand2 = Math.floor((Math.random() * cards.length));
        let tmp = cards[rand1];
        cards[rand1] = cards[rand2];
        cards[rand2] = tmp;
        }
}
function scoring(player1card, player2card)
{
    console.log(player1card);
    console.log(player2card);
    if (player1card>player2card){
        console.log("Player 1 wins!")
    }
    else if (player1card<player2card){
        console.log("Player 2 wins!")
    }
    else{
        console.log("It's a push")
    }

}
deck();
newSet();