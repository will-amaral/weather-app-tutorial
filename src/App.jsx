import React, { useState } from 'react';

import { GlobalStyle, StyledContainer } from './styles';
import { Header } from './components/Header';
import { About, Forecast } from './pages';

function App() {
  const [selected, setSelected] = useState('forecast');

  return (
    <div>
      <GlobalStyle />
      <Header selected={selected} handleClick={setSelected} />
      <StyledContainer>
        {selected === 'forecast' && <Forecast />}
        {selected === 'about' && <About />}
      </StyledContainer>
    </div>
  );
}

export default App;
