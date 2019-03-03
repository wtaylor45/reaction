import React, { useState } from 'react';
import useKey from 'use-key-hook';
import styled from 'styled-components';
import bloop from '../sounds/808-Cowbell2.wav';

const Button = styled.button`
  background-position: center;
  background-color: #444;
  border: 2px solid dodgerblue;
  color: white;
  font-size: 2vmin;
  transition: background 0.8s;

  &:hover {
    background: #555 radial-gradient(circle, transparent 1%, #555 1%)
      center/15000%;
  }

  &.active,
  &:active {
    background-color: #666;
    background-size: 100%;
    transition: background 0s;
    transform: scale(1.1);
  }
`;

const DrumPad = ({ keyPress, soundUrl = bloop }) => {
  const [isPlaying, trigger] = useAudio(soundUrl);

  const handleButtonClick = () => {
    trigger();
  };

  useKey(
    () => {
      const el = document.getElementById(keyPress);
      el.click();
      el.classList.add('active');
    },
    {
      detectKeys: [keyPress.toLowerCase()],
      keyevent: 'keydown'
    }
  );

  useKey(
    () => {
      const el = document.getElementById(keyPress);
      el.classList.remove('active');
    },
    {
      detectKeys: [keyPress.toLowerCase()],
      keyevent: 'keyup'
    }
  );

  return (
    <Button
      type="button"
      onClick={handleButtonClick}
      value={soundUrl}
      playing={isPlaying}
      id={keyPress}
    >
      {keyPress}
    </Button>
  );
};

const useAudio = source => {
  const audio = new Audio(source);
  const [playing, setPlaying] = useState(false);
  audio.onended = () => setPlaying(false);

  const trigger = () => {
    audio.load();
    audio.play();
    setPlaying(true);
  };

  return [playing, trigger];
};

export default DrumPad;
