import React from 'react';
import GameListItemComponent from './GameListItemComponent';

class GameListComponent extends React.Component {
  selectGame(game) {
    this.props.onSelect(game);
  }

  render() {
    console.log(this.state);
    let component = this;
    return (
      <ul>
        {this.props.games.map(function(game) {
          return (<GameListItemComponent key={game._id} game={game} onClick={component.selectGame.bind(component)}/>);
        })}
      </ul>
    );
  }
}

export default GameListComponent;
