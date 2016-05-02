import BaseModel from './BaseModel';

class GameModel extends Base.Model {
  defaults (){
    return {
      playerOne: null,
      playerTwo: null,
      playerOneMove: null,
      playerTwoMove: null,
      winner: null
    };
  }

  costructor(){
    super('game');
  }
}

export default GameModel
