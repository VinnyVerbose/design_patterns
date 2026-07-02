import DeckModel from './models/DeckModel.js';
import PlayerModel from './models/PlayerModel.js';
import GameController from './controllers/GameController.js';
import GameView from './views/GameView.js';
const game = 
new GameController(new PlayerModel('Human'), new PlayerModel(), new DeckModel(), new GameView());

game.view.renderPlayers(game.p1, game.p2);