import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faSearchLocation } from '@fortawesome/free-solid-svg-icons';

import { StyledInput, StyledButton, StyledForm, StyledInputContainer } from './styles';

function Input() {
  return (
    <StyledInputContainer>
      <StyledForm>
        <StyledButton>
          <Icon icon={faLocationArrow} />
        </StyledButton>
        <StyledInput placeholder='Digite o endereço aqui' />
        <StyledButton>
          <Icon icon={faSearchLocation} />
        </StyledButton>
      </StyledForm>
      <p>Enter the address, city name or zip code to get the weather forecast</p>
    </StyledInputContainer>
  );
}

export default Input;
