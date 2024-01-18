import React from 'react';
import './styles.css';
import Profile from '../../img/davidrocha.png'

import AvatarProfile from '../../objects/AvatarProfile';

const ProfileUser = () => (
  <dl className='profile-user'>
    <dd className='avatar'>
      <AvatarProfile src={Profile} alt='Imagem David Rocha' />
    </dd>
    <dt className='title'>David Rocha</dt>
    <dd className='description'>Dev Front-end React e Mobile com React Native. </dd>
  </dl>
);

export default ProfileUser;