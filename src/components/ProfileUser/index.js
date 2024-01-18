import React from 'react';
import Profile from '../../img/davidrocha.png'
import AvatarProfile from '../../objects/AvatarProfile';

const ProfileUser = () => (
  <dl>
    <dd>
      <AvatarProfile src={Profile} alt='Imagem David Rocha' />
    </dd>
    <dt>David Rocha</dt>
    <dd>Dev Front-end React e Mobile com React Native. </dd>
  </dl>
);

export default ProfileUser;