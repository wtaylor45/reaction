import React from 'react';
import styled from 'styled-components';
import DrumPad from './components/DrumPad';
import kick from './sounds/Clicky Kick.wav';

const Machine = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 20vmin);
  grid-template-rows: repeat(4, 20vmin);
  place-content: center;
  grid-column-gap: 1vmin;
  grid-row-gap: 1vmin;
  height: 100vh;
  background-color: #444;
`;

const App = () => (
  <div>
    <Machine>
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
  </div>
);

export default App;
