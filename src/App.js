import React, { Component } from 'react';

import './App.css';

import { IMAGE_WIDTH, IMAGE_HEIGHT } from './constants'
import { generateImageData } from './commons/services';
import DrawingPage from './containers/drawingPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageWidth: IMAGE_WIDTH,
      imageHeight: IMAGE_HEIGHT,
      elapsedTime: 0,
      sortBy: null,
    }

    this.sortImageColors = this.sortImageColors.bind(this);
  }

  generateImage = (sortMethod = null) => {
    const t1 = new Date();

    const {
      imageHeight,
      imageWidth,
    } = this.state;

    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');

    const imageData = context.createImageData(imageWidth, imageHeight);
    context.putImageData(generateImageData(imageData, sortMethod), 0, 0);

    const t2 = new Date();

    this.setState({
      elapsedTime: t2 - t1
    })
  }

  componentDidMount(){
    this.generateImage();
  }

  sortImageColors = (sortBy) => {
    this.generateImage(sortBy);
    this.setState({
      sortBy
    })
  }

  render() {
    const {
      elapsedTime,
      imageHeight,
      imageWidth,
      sortBy,
    } = this.state;

    return (
      <div className="App">
        <DrawingPage
          buttonFourText="Hue"
          buttonOneText="Unsort"
          buttonThreeText="Luminance"
          buttonTwoText="Linear"
          currentSort={sortBy}
          elapsedTime={elapsedTime}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          sortImageColors={this.sortImageColors}
        />
      </div>
    );
  }
}

export default App;
