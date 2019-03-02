import React, { useState } from 'react';
import styled from 'styled-components';
import Sound from 'react-sound';
import bloop from '../sounds/808-Cowbell2.wav';

const Button = styled.button`
  background: ${props => (props.playing ? `dodgerblue` : `lightgray`)};
  border-right: 3px inset gray;
  border-bottom: 3px inset gray;
`;

const DrumPad = ({ name, soundUrl = bloop }) => {
  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);
  const [position, setPosition] = useState(0);

  const handleButtonClick = () => {
    setPosition(0);
    console.log('INTERUPTTTT');
    setPlayStatus(Sound.status.PLAYING);
  };

  const handleSoundCompletion = () => {
    setPlayStatus(Sound.status.STOPPED);
  };

  const handlePlaying = ({ curPos }) => {
    setPosition(curPos);
  };

  return (
    <Button type="button" onClick={handleButtonClick} value={soundUrl}>
      {name}
      <Sound
        url={soundUrl}
        position={position}
        onFinishedPlaying={handleSoundCompletion}
        playStatus={playStatus}
        onPlaying={handlePlaying}
        autoLoad
      />
    </Button>
  );
};

export default DrumPad;
