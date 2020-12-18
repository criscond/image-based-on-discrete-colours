import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = (props) => {
  const {
    clicked,
    text,
  } = props;

  return (
    <button
      className="button"
      type="button"
      onClick={clicked}
    >{text}
    </button>
  );
}

Button.propTypes = {
  clicked: PropTypes.func,
  text: PropTypes.string
};

export default Button;
