import React from 'react'
import './styles.css'
import playerX from '../../img/player-x.png'
import playerO from '../../img/player-o.png'

/**
 * Será o objeto que, ao clicar, vai aparecer
 * um X ou um O
 */

const Player = ({player}) => {
  const players = [];
  players['x'] = playerX;
  players['o'] = playerO;

  return (
    <button className='player'>
    <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`} />
    </button>
  );
}

export default Player;