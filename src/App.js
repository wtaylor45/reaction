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

  const handlePadClick = e => {
    if (e.target.value) setSound(e.target.value);
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
        <Pads onClick={handlePadClick}>
          <DrumPad soundUrl={stick} />
          <DrumPad soundUrl={tom2} />
          <DrumPad soundUrl={tom3} />
          <DrumPad soundUrl={tom1} />
          <DrumPad soundUrl={clave} />
          <DrumPad soundUrl={clap2} />
          <DrumPad soundUrl={clap1} />
          <DrumPad soundUrl={cowbell} />
          <DrumPad soundUrl={maraca} />
          <DrumPad soundUrl={hihat1} />
          <DrumPad soundUrl={hihat2} />
          <DrumPad soundUrl={ride1} />
          <DrumPad soundUrl={kick1} />
          <DrumPad soundUrl={kick2} />
          <DrumPad soundUrl={snare1} />
          <DrumPad soundUrl={snare2} />
        </Pads>
      </Machine>
    </Container>
  );
};

export default App;
