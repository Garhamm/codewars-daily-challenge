// 8 kyu Define a card suit

function defineSuit(card) {
    let suit = card.split('').pop()
    switch (suit){
        case '♣':
            return 'clubs'
            break;
        case '♦':
            return 'diamonds'
            break;
        case '♥':
            return 'hearts'
            break;
        case '♠':
            return 'spades'
            break;
        
    }
  }
  console.log(defineSuit('♠'))