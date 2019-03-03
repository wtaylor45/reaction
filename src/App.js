import React, { useState } from 'react';
import styled from 'styled-components';
import ReactWaves from '@dschoon/react-waves';
import DrumPad from './components/DrumPad';
import kick1 from './sounds/808-Kicks01.wav';
import kick2 from './sounds/808-Kicks03.wav';
import cowbell from './sounds/808-Cowbell2.wav';
import hihat1 from './sounds/808-HiHats01.wav';
import maraca from './sounds/808-Maracas3.wav';
import hihat2 from './sounds/808-OpenHiHats02.wav';
import ride1 from './sounds/808-Ride1.wav';
import snare1 from './sounds/808-Snare38.wav';
import snare2 from './sounds/808-Snare39.wav';
import stick from './sounds/808-Stick1.wav';
import tom1 from './sounds/808-Tom1.wav';
import tom2 from './sounds/808-Tom2.wav';
import tom3 from './sounds/808-Tom5.wav';
import clap1 from './sounds/808-Clap04.wav';
import clap2 from './sounds/808-Clap14.wav';
import clave from './sounds/808-Clave1.wav';

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
  grid-template-columns: repeat(4, 15vmin);
  grid-template-rows: repeat(4, 15vmin);
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

  const handlePadClick = value => {
    if (value) setSound(value);
  };

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
            height: 150,
            hideScrollbar: true,
            responsive: true,
            waveColor: 'dodgerblue',
            volume: 0
          }}
        />
        <Pads>
          <DrumPad onClick={handlePadClick} soundUrl={stick} keyPress="5" />
          <DrumPad onClick={handlePadClick} soundUrl={tom2} keyPress="6" />
          <DrumPad onClick={handlePadClick} soundUrl={tom3} keyPress="7" />
          <DrumPad onClick={handlePadClick} soundUrl={tom1} keyPress="8" />
          <DrumPad onClick={handlePadClick} soundUrl={clave} keyPress="T" />
          <DrumPad onClick={handlePadClick} soundUrl={clap2} keyPress="Y" />
          <DrumPad onClick={handlePadClick} soundUrl={clap1} keyPress="U" />
          <DrumPad onClick={handlePadClick} soundUrl={cowbell} keyPress="I" />
          <DrumPad onClick={handlePadClick} soundUrl={maraca} keyPress="F" />
          <DrumPad onClick={handlePadClick} soundUrl={hihat1} keyPress="G" />
          <DrumPad onClick={handlePadClick} soundUrl={hihat2} keyPress="H" />
          <DrumPad onClick={handlePadClick} soundUrl={ride1} keyPress="J" />
          <DrumPad onClick={handlePadClick} soundUrl={kick1} keyPress="V" />
          <DrumPad onClick={handlePadClick} soundUrl={kick2} keyPress="B" />
          <DrumPad onClick={handlePadClick} soundUrl={snare1} keyPress="N" />
          <DrumPad onClick={handlePadClick} soundUrl={snare2} keyPress="M" />
        </Pads>
      </Machine>
    </Container>
  );
};

export default App;
