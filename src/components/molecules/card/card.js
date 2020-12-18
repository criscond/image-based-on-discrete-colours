import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

import Button from '../../atom/button/button';
import Canvas from '../../atom/canvas/canvas';

const Card = (props) => {
  const {
    buttonFourText,
    buttonOneText,
    buttonTwoText,
    buttonThreeText,
    sortImageColors,
    imageHeight,
    imageWidth,
  } = props;

  return (
    <div className="card">
      <Canvas
        height={imageHeight}
        width={imageWidth}
      />
      <Button 
        clicked={() => sortImageColors()}
        text={buttonOneText}
      />
      <Button 
        clicked={() => sortImageColors('linear')}
        text={buttonTwoText}
      />
      <Button 
        clicked={() => sortImageColors('luminance')}
        text={buttonThreeText}
      />
      <Button 
        clicked={() => sortImageColors('hue')}
        text={buttonFourText}
      />
    </div>
  );
}

Card.propTypes = {
  buttonFourText: PropTypes.string,
  buttonOneText: PropTypes.string,
  buttonThreeText: PropTypes.string,
  buttonTwoText: PropTypes.string,
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
  sortImageColors: PropTypes.func,
};

export default Card;
