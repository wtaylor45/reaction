import React, { useState } from 'react';
import styled from 'styled-components';
import ReactWaves from '@dschoon/react-waves';
import DrumPad from './components/DrumPad';
import kick from './sounds/Clicky Kick.wav';

const Container = styled.div`
  height: 100vh;
`;

const Machine = styled.main`
  display: grid;
  grid-template-rows: auto auto;
  place-content: center;
  background: #444;
  height: 100%;
`;

const Pads = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 10vmin);
  grid-template-rows: repeat(4, 10vmin);
  place-content: center;
  grid-column-gap: 1vmin;
  grid-row-gap: 1vmin;
`;

const Wave = styled(ReactWaves)`
  grid-column: span 4;
  margin: none;
  background: #555;
`;

const App = () => {
  const [sound, setSound] = useState('');
  // const [isPlaying, setIsPlaying] = useState(false);

  const handlePadClick = e => {
    if (e.target.value) setSound(e.target.value);
    // setIsPlaying(true);
  };

  // const handleSoundComplete = () => {
  //   setIsPlaying(false);
  // };

  return (
    <Container>
      <Machine>
        <Wave
          audioFile={sound}
          playing={false}
          volume={0}
          options={{
            barHeight: 2,
            normalize: true,
            interact: false,
            cursorWidth: 0,
            height: 200,
            hideScrollbar: true,
            progressColor: '#EC407A',
            responsive: true,
            waveColor: 'dodgerblue',
            volume: 0
          }}
        />
        <Pads onClick={handlePadClick}>
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad sound={kick} />
          <DrumPad />
          <DrumPad />
          <DrumPad />
        </Pads>
      </Machine>
    </Container>
  );
};

export default App;
