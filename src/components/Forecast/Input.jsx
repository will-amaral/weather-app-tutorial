import React, { useState } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faLocationArrow,
  faSearchLocation,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import { StyledInput, StyledButton, StyledForm, StyledInputContainer } from './styles';

function Input(props) {
  const { fetchLocation, setCoordinates, setLocation, setMessage } = props;
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    console.log(value);
    fetchLocation(value);
    event.preventDefault();
  }

  function handleLocation() {
    setLoading(true);

    const success = (obj) => {
      const { latitude, longitude } = obj.coords;
      setCoordinates({ lat: latitude, lon: longitude });
      setLocation('your location');
      setLoading(false);
    };

    const error = (err) => {
      console.log(err);
      setMessage(`${err.message}. Please, allow in your browser.`);
      setLoading(false);
    };

    const geo = window.navigator.geolocation;
    geo.getCurrentPosition(success, error);
  }

  return (
    <StyledInputContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledButton type='button' onClick={handleLocation}>
          <Icon icon={loading ? faSpinner : faLocationArrow} />
        </StyledButton>
        <StyledInput
          placeholder='Digite o endereço aqui'
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <StyledButton>
          <Icon icon={faSearchLocation} />
        </StyledButton>
      </StyledForm>
      <p>Enter the address, city name or zip code to get the weather forecast</p>
    </StyledInputContainer>
  );
}

export default Input;
