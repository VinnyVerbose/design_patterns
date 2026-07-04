export default class GameModel {
    constructor(p1, p2, deck) {
        this.p1 = p1;
        this.p2 = p2;
        this.deck = deck;
        this.warCards = [];
        this.gameOver = false;

        this.deck.dealToPlayers(this.p1, this.p2);
    }

    playTurn() {
        const p1Hand = this.p1.drawCards(4);
        const p2Hand = this.p2.drawCards(4);

        if (p1Hand.length === 0 || p2Hand.length === 0) {
            this.gameOver = true;
            return {
                type: "game-over",
                winner: this.getWinner(),
                p1Hand,
                p2Hand
            };
        }

        if (p1Hand[0].val > p2Hand[0].val) {
            this.p1.addCards([
                ...this.warCards.splice(0),
                ...p1Hand,
                ...p2Hand
            ]);

            return {
                type: "hand-winner",
                winner: this.p1.name,
                p1Hand,
                p2Hand
            };
        }

        if (p2Hand[0].val > p1Hand[0].val) {
            this.p2.addCards([
                ...this.warCards.splice(0),
                ...p2Hand,
                ...p1Hand
            ]);

            return {
                type: "hand-winner",
                winner: this.p2.name,
                p1Hand,
                p2Hand
            };
        }

        this.warCards = [...this.warCards, ...p1Hand, ...p2Hand];

        return {
            type: "war",
            winner: null,
            p1Hand,
            p2Hand
        };
    }

    getWinner() {
        if (this.p1.cards.length === 0) {
            return this.p2;
        }

        return this.p1;
    }
}