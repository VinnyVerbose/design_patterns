export default class GameController{
    constructor(p1, p2, deck, view=null){
        this.p1 = p1;
        this.p2 = p2;
        this.deck = deck;
        this.view = view;
        this.warCards = [];
        this.gameOver = false;
        this.button = document.getElementById('btnPlay');

        this.deck.dealToPlayers(this.p1, this.p2);
        
        this.addEventListener();
    }

    addEventListener(){
        this.button.addEventListener('click', ()=>{
            this.playHand();
        })
    }

    playHand(){
            const p1Hand = this.p1.playHand();
            const p2Hand = this.p2.playHand();

            

            if(p1Hand.length === 0 || p2Hand.length === 0){ 
                this.announceWinner();
                return;
            }

            if(p1Hand[0].val > p2Hand[0].val){

                this.p1.addCards([...this.warCards.splice(0), ...p1Hand, ...p2Hand]);

                this.view.renderPlayers(this.p1, this.p2);
                this.view.renderHand(p1Hand, p2Hand, this.p1);
            } else if(p2Hand[0].val > p1Hand[0].val){

                this.p2.addCards([...this.warCards.splice(0), ...p2Hand, ...p1Hand]);
                this.view.renderPlayers(this.p1, this.p2);

                this.view.renderHand(p1Hand, p2Hand, this.p2);
            } else {
                this.warCards = [...this.warCards, ...p1Hand, ...p2Hand];
                
                this.view.renderHand(p1Hand, p2Hand);
                return this.playHand();
            }
    }

    announceWinner(){
        if(this.p1.cards.length === 0){
            this.view.renderWinner(this.p2);
        } else {
            this.view.renderWinner(this.p1);
        }        
    }    
}