import React from 'react';
import styled from 'styled-components';
import DrumPad from './components/DrumPad';

const Machine = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 20vmin);
  grid-template-rows: repeat(4, 20vmin);
  place-content: center;
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
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
    </Machine>
  </div>
);

export default App;
