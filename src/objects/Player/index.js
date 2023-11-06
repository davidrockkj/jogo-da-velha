import React from 'react'
import './styles.css'
import playerX from '../../img/player-x.png'

/**
 * Será o objeto que, ao clicar, vai aparecer
 * um X ou um O
 */

const Player = () => (
  <button className='player'>
    <img src={playerX} alt='Jogador X' />
  </button>
);

export default Player;