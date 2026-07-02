/*

Game(p1, p2, deck, view):
Deal Cards()
Play Hand()
Evaluate Hand()
Distribute Winnings()
Handle War()
Announce Winner()
End Game()

*/


export default class GameController{
    constructor(p1, p2, deck, view=null){
        this.p1 = p1;
        this.p2 = p2;
        this.deck = deck;
        this.view = view;

        this.deck.dealToPlayers(this.p1, this.p2);
        this.test();
    }

    test(){
        console.log(this);
    }

    playHand(){
        const p1Hand = this.p1.playHand();
        const p2Hand = this.p2.playHand();

        if(p1Hand.length === 0 || p2Hand.length === 0){ 
            this.announceWinner();
            return;
        }

        
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
        location.reload();
    }
    
}