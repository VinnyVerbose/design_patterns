export default class GameController {
    constructor(game, view) {
        this.game = game;
        this.view = view;
        this.view.renderPlayers(this.game.p1, this.game.p2);

        this.view.bindPlayButton(() => {
            this.handlePlayButtonClick();
        });
    }

    handlePlayButtonClick() {
        if (this.game.gameOver) {
            location.reload();
        }
        const result = this.game.playTurn();

        this.view.renderPlayers(this.game.p1, this.game.p2);

        if (result.type === "game-over") {
            this.view.renderWinner(result.winner);
            return;
        }

        this.view.renderHand(result.p1Hand, result.p2Hand, result.winner);

        if (result.type === "war") {
            this.handlePlayButtonClick();
        }
    }
}