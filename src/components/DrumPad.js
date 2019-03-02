import React, { useState } from 'react';
import styled from 'styled-components';
import Sound from 'react-sound';
import kick from '../sounds/Clicky Kick.wav';

const Button = styled.button`
  background: ${props => (props.playing ? `blue` : `gray`)};
`;

const DrumPad = ({ name }) => {
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
        url={kick}
        position={position}
        onFinishedPlaying={handleSoundCompletion}
        playStatus={playStatus}
        onPlaying={handlePlaying}
      />
    </Button>
  );
};

export default DrumPad;
