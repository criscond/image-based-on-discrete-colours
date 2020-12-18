import React from 'react';
import PropTypes from 'prop-types';

import './canvas.css';

const Canvas = (props) => {
  const {
    height = 128,
    width = 256,
  } = props;

  return (
    <canvas
      className="canvas"
      height={height}
      id="canvas"
      width={width}
    >
    </canvas>
  );
}

Canvas.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Canvas;
