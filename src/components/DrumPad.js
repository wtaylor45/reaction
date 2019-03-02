import React, { useState } from 'react';
import styled from 'styled-components';
import Sound from 'react-sound';
import bloop from '../sounds/bloop.wav';

const Button = styled.button`
  background: ${props => (props.playing ? `dodgerblue` : `lightgray`)};
  border-right: 3px inset gray;
  border-bottom: 3px inset gray;
`;

const DrumPad = ({ name, sound = bloop }) => {
  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);
  const [position, setPosition] = useState(0);

  const handleButtonClick = () => {
    setPosition(0);
    setPlayStatus(Sound.status.PLAYING);
  };

  const handleSoundCompletion = () => {
    setPlayStatus(Sound.status.STOPPED);
  };

  const handlePlaying = ({ curPos }) => {
    setPosition(curPos);
  };

  return (
    <Button
      type="button"
      onClick={handleButtonClick}
      playing={playStatus === Sound.status.PLAYING}
    >
      {name}
      <Sound
        url={sound}
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
