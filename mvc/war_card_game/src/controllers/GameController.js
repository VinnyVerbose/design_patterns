export default class GameController{
    constructor(p1, p2, deck, view=null){
        this.p1 = p1;
        this.p2 = p2;
        this.deck = deck;
        this.view = view;
        this.warCards = [];
        this.gameOver = false;

        this.deck.dealToPlayers(this.p1, this.p2);
    }

    playHand(){
        // while(!this.gameOver){
            const p1Hand = this.p1.playHand();
            const p2Hand = this.p2.playHand();

            

            if(p1Hand.length === 0 || p2Hand.length === 0){ 
                this.announceWinner();
                return;
            }

            if(p1Hand[0].val > p2Hand[0].val){
                this.p1.addCards([...this.warCards.splice(0), ...p1Hand, ...p2Hand]);
                this.view.renderPlayers(this.p1, this.p2);
                console.log(`${this.p1.name} Won Hand`);
                this.view.renderHand(p1Hand, p2Hand, this.p1);
                console.log(this.p1.cards.length, this.p2.cards.length, p1Hand[0].val, p2Hand[0].val)
                console.log(this.p1.cards, this.p2.cards, this.warCards);
            } else if(p2Hand[0].val > p1Hand[0].val){
                this.p2.addCards([...this.warCards.splice(0), ...p2Hand, ...p1Hand]);
                this.view.renderPlayers(this.p1, this.p2);
                console.log(`${this.p2.name} Won Hand`);
                this.view.renderHand(p1Hand, p2Hand, this.p2);
                console.log(this.p1.cards.length, this.p2.cards.length, p1Hand[0].val, p2Hand[0].val)
                console.log(this.p1.cards, this.p2.cards, this.warCards);
            } else {
                console.log('War!');
                this.warCards = [...this.warCards, ...p1Hand, ...p2Hand];
                console.log(this.p1.cards.length, this.p2.cards.length, p1Hand[0].val, p2Hand[0].val)
                console.log(this.p1.cards, this.p2.cards, this.warCards);
                this.view.renderHand(p1Hand, p2Hand);
                return this.playHand();
            }
        // }
    }

    announceWinner(){
        if(this.p1.cards.length === 0){
            console.log('P2 Wins!');
        } else {
            console.log('P1 Wins!');
        }

        this.endGame();
    }

    endGame(){
        this.gameOver = true;
        console.log('END GAME')
        
       // location.reload();
    }
    
}