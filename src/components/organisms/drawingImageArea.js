import React from 'react';
import PropTypes from 'prop-types';

import Card from '../molecules/card/card';

const DrawingImageArea = (props) => {
  const {
    buttonFourText,
    buttonOneText,
    buttonThreeText,
    buttonTwoText,
    currentSort,
    elapsedTime,
    imageHeight,
    imageWidth,
    sortImageColors,
  } = props;

  const sortTitle = currentSort
    ? `Colors are sorted: ${currentSort}`
    : `Colors are: unsorted`

  return (
    <div>
      <h1>Preview Area</h1>
      <h4>{sortTitle}</h4>
      <span>Elapsed time: {elapsedTime} ms</span>
      <Card
        buttonFourText={buttonFourText}
        buttonOneText={buttonOneText}
        buttonThreeText={buttonThreeText}
        buttonTwoText={buttonTwoText}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
        sortImageColors={sortImageColors}
      />
    </div>
  );
}

DrawingImageArea.propTypes = {
  buttonFourText: PropTypes.string,
  buttonOneText: PropTypes.string,
  buttonThreeText: PropTypes.string,
  buttonTwoText: PropTypes.string,
  currentSort: PropTypes.string,
  elapsedTime: PropTypes.number,
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
  sortImageColors: PropTypes.func,
};

export default DrawingImageArea;
