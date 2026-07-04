export default class PlayerModel{
    constructor(name='Computer'){
        this.name = name;
        this.cards = [];
    }

    addCards(cardsArr){
        this.cards = [...cardsArr, ...this.cards];
    }

    drawCards(num){
        if(this.cards.length >= num){
            return this.cards.splice(this.cards.length - num);
        }

        return this.cards.splice(0);
    }
}