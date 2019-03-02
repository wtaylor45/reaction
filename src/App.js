import React from 'react';
import styled from 'styled-components';
import ReactWaves from '@dschoon/react-waves';
import DrumPad from './components/DrumPad';
import kick from './sounds/Clicky Kick.wav';

const Container = styled.div`
  height: 100vh;
`;

const Machine = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 10vmin);
  grid-template-rows: auto repeat(4, 10vmin);
  place-content: center;
  grid-column-gap: 1vmin;
  grid-row-gap: 1vmin;
  background: #444;
  height: 100%;
`;

const Wave = styled(ReactWaves)`
  grid-column: span 4;
  margin: none;
`;

const App = () => (
  <Container>
    <Machine>
      <Wave
        audioFile={kick}
        options={{
          barHeight: 2,
          cursorWidth: 0,
          height: 200,
          hideScrollbar: true,
          progressColor: '#EC407A',
          responsive: true,
          waveColor: 'dodgerblue'
        }}
      />
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
    </Machine>
  </Container>
);

export default App;
