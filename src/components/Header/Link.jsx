import React from 'react';
import PropTypes from 'prop-types';

import { StyledListItem, StyledLink } from './styles';
import { firstUpper } from '../../utils/helpers';

function Link(props) {
  const { title, selected, handleClick } = props;
  return (
    <StyledListItem>
      <StyledLink onClick={() => handleClick(title)} active={selected === title}>
        {firstUpper(title)}
      </StyledLink>
    </StyledListItem>
  );
}

Link.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Link;
