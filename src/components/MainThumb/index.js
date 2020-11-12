import React from 'react';
import { Avatar, Thumb, WrapperThumb } from './styled';


function MainThumb({ src, alt, avatar, channelName} ) {
  return (
    <WrapperThumb>
      <Thumb src={src} alt={ alt } />
      <Avatar src={avatar} alt={channelName} />
    </WrapperThumb>
  );
}

export default MainThumb;