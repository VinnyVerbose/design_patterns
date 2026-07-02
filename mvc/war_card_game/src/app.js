import DeckModel from './models/DeckModel.js';
import PlayerModel from './models/PlayerModel.js';
import GameController from './controllers/GameController.js';

const game = 
new GameController(new PlayerModel('Vinny'), new PlayerModel(), new DeckModel());

game.playHand();