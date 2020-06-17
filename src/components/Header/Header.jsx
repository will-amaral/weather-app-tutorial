import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeader, StyledListContainer } from './styles';
import Link from './Link';
import routes from '../../utils/routes';

function Header(props) {
  const { selected, handleClick } = props;

  return (
    <StyledHeader>
      <h1>Weather</h1>
      <nav>
        <StyledListContainer>
          {routes.map((title) => (
            <Link
              key={title}
              title={title}
              handleClick={handleClick}
              selected={selected}
            />
          ))}
        </StyledListContainer>
      </nav>
    </StyledHeader>
  );
}

Header.propTypes = {
  selected: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

Header.defaultProps = {
  selected: 'forecast',
};

export default Header;
