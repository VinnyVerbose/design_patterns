export default class PlayerModel{
    constructor(name='Computer'){
        this.name = name;
        this.cards = [];
    }

    addCards(cardsArr){
        this.cards = [...cardsArr, ...this.cards];
    }

    playHand(){
        if(this.cards.length >= 4){
            return this.cards.splice(this.cards.length - 4);
        }

        return this.cards.splice(0);
    }
}