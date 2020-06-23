import React, { useState } from 'react';

import { GlobalStyle, StyledContainer } from './styles';
import { Header } from './components/Header';
import { About, Forecast } from './pages';
import { gapi } from './utils/api';

function App() {
  const [selected, setSelected] = useState('forecast');
  const [coordinates, setCoordinates] = useState();
  const [location, setLocation] = useState();

  async function fetchLocation(address) {
    try {
      const { data } = await gapi.get('/geocode/json', {
        params: { address, key: 'AIzaSyD6rKc6URJVJv5GNgNydJxd19jitau6pg0' },
      });
      const { results } = data;
      console.log(results);
      setLocation(results[0].formatted_address);
      const { lat, lng: lon } = results[0].geometry.location;
      setCoordinates({ lat, lon });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <GlobalStyle />
      <Header selected={selected} handleClick={setSelected} />
      <StyledContainer>
        {selected === 'forecast' && (
          <Forecast
            fetchLocation={fetchLocation}
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            location={location}
            setLocation={setLocation}
          />
        )}
        {selected === 'about' && <About />}
      </StyledContainer>
    </div>
  );
}

export default App;
