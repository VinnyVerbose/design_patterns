import DeckModel from './models/DeckModel.js';
import PlayerModel from './models/PlayerModel.js';
import GameModel from './models/GameModel.js';
import GameController from './controllers/GameController.js';
import GameView from './views/GameView.js';

const game = new GameModel(
    new PlayerModel('Human'),
    new PlayerModel(),
    new DeckModel()
);

const view = new GameView();

new GameController(game, view);