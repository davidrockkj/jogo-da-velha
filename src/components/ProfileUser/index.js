import React from 'react';
import './styles.css';
import Profile from '../../img/davidrocha.png'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'
import twitter from '../../img/twitter.png'

import AvatarProfile from '../../objects/AvatarProfile';
import IconSocial from '../../objects/IconSocial';

const ProfileUser = () => (
  <dl className='profile-user'>
    <dd className='avatar'>
      <AvatarProfile src={Profile} alt='Imagem David Rocha' />
    </dd>
    <dt className='title'>David Rocha</dt>
    <dd className='description'>Dev Front-end React e Mobile com React Native. </dd>
    <dd className='socials'>
      <IconSocial src={github} alt="Logo da Github" />
      <IconSocial src={linkedin} alt="Logo da Linkedin" />
      <IconSocial src={instagram} alt="Logo da Instagram" />
      <IconSocial src={twitter} alt="Logo da Twitter" />
    </dd>
  </dl>
);

export default ProfileUser;