export default class DeckModel{
    constructor(){
        this.deck = [];
        this.SUITS = ['&spades;', '&hearts;', '&clubs;', '&diams;'];

        this.createCards();
    }

    cardsRemaining(){
        return this.deck.length;
    }

    shuffleDeck(){
        const shuffled = [...this.deck]; 
        
        for (let i = shuffled.length - 1; i > 0; i--) {
            
            const j = Math.floor(Math.random() * (i + 1)); 
            
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; 
        }
        
        this.deck = shuffled;
    }

    drawCard(){
        return this.deck.pop();
    }

    drawCards(number){
        for(let i = 0; i < number; i++){
            return this.deck.splice(0, number);
        }
        // p1.addCards(this.deck.splice(this.deck.length / 2));
        // p2.addCards(this.deck.splice(0));
    }

    createCards() {
        this.SUITS.forEach(suit => {
            for(let i = 2; i <= 14; i++){
                
                let name = i;

                switch(name){
                    case 14:
                        name = 'A';
                        break;

                    case 11:
                        name = 'J';
                        break;

                    case 12:
                        name = 'Q';
                        break;
                        
                    case 13:
                        name = 'K';
                        break;
                }
                this.deck.push({
                    name,
                    val: i,
                    suit 
                });
            }
        });

        this.shuffleDeck();
    }
}


