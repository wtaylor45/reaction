import React, { useState } from 'react';
import styled from 'styled-components';
import bloop from '../sounds/808-Cowbell2.wav';

const Button = styled.button`
  background-color: ${props => (props.playing ? '#555' : '#222')};
  border: 2px solid dodgerblue;
`;

const DrumPad = ({ name, soundUrl = bloop }) => {
  const [isPlaying, trigger] = useAudio(soundUrl);

  const handleButtonClick = () => {
    trigger();
  };

  return (
    <Button
      type="button"
      onClick={handleButtonClick}
      value={soundUrl}
      playing={isPlaying}
    >
      {name}
    </Button>
  );
};

const useAudio = source => {
  const audio = new Audio(source);
  const [playing, setPlaying] = useState(false);

  audio.onended = () => setPlaying(false);

  const trigger = () => {
    audio.load();
    audio.currentTime = 0;
    audio.play();
    setPlaying(true);
  };

  return [playing, trigger];
};

export default DrumPad;
