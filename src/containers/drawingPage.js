import React from 'react';
import PropTypes from 'prop-types';

import DrawingImageArea from '../components/organisms/drawingImageArea';

const DrawingPage = (props) => {
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

  return (
    <DrawingImageArea
      buttonFourText={buttonFourText}
      buttonOneText={buttonOneText}
      buttonThreeText={buttonThreeText}
      buttonTwoText={buttonTwoText}
      currentSort={currentSort}
      elapsedTime={elapsedTime}
      imageHeight={imageHeight}
      imageWidth={imageWidth}
      sortImageColors={sortImageColors}
    />
  );
}

DrawingPage.propTypes = {
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

export default DrawingPage;
