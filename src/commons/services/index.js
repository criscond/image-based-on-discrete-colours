import {
  STEP,
  ESENTIAL_COLOR_MAX_VALUE,
  ALPHA_VALUE,
  RED_Y,
  GREEN_Y,
  BLUE_Y,
} from '../../constants';

export const generateImageData = (imageData, sortMethod) => {
  let red;
  let green;
  let blue;
  
  let colorIndices;
  let colors = [];
  let index = 0;
  let fieldToSortBy;

  const { width, height } = imageData;

  for(red = 0; red <= ESENTIAL_COLOR_MAX_VALUE; red += STEP){
    for(green = 0; green <= ESENTIAL_COLOR_MAX_VALUE; green += STEP){
      for(blue = 0; blue <= ESENTIAL_COLOR_MAX_VALUE; blue += STEP){

        if(sortMethod !== null){
          fieldToSortBy = getSortRefereces(red, green, blue, sortMethod);
        }

        colors[index] = {
          red,
          green,
          blue,
          fieldToSortBy,
        }

        index ++;
      } 
    }
  }
  
  colors = sortImageColors(colors);

  let n = 0;

  for(let X = 0; X < width; X++){
    for(let Y = 0; Y < height; Y++){
      colorIndices = getColorIndicesForCoordinates(X, Y, width);
      const [redIndex, greenIndex, blueIndex, alphaIndex] = colorIndices;

      if(colors[n]) {
        imageData.data[redIndex] = colors[n].red;
        imageData.data[greenIndex] = colors[n].green;
        imageData.data[blueIndex] = colors[n].blue;
        imageData.data[alphaIndex] = ALPHA_VALUE;
      }

      n++;
    }
  }

  return imageData;
}

const sortImageColors = (colors) => colors.sort((a, b) => a.fieldToSortBy - b.fieldToSortBy);

const getSortRefereces = (red, green, blue, sortMethod) => {
  switch(sortMethod){
    case 'linear':
      return RED_Y * red + GREEN_Y * green + BLUE_Y * blue;
    case 'luminance':
      return RED_Y * sRGBtoLin(red) + GREEN_Y * sRGBtoLin(green) +BLUE_Y * sRGBtoLin(blue);
    case 'hue':
      return rgbToHsl(red, green, blue);

    default:
      return null;
  }
}

const getColorIndicesForCoordinates = (x, y, width) => {
  const red = y * (width * 4) + x * 4;
  return [red, red + 1, red + 2, red + 3];
}

const convertColorToDec = (colorChannel) => colorChannel / 255;

const sRGBtoLin = (colorChannel) => {
  const vColorChannel = convertColorToDec(colorChannel);

  if ( vColorChannel <= 0.04045 ) {
    return vColorChannel / 12.92;
  } 
  else {
    return Math.pow((( vColorChannel + 0.055)/1.055),2.4);
  }
}

const rgbToHsl = (red, green, blue) => {
  const r =  convertColorToDec(red);
  const g =  convertColorToDec(green);
  const b =  convertColorToDec(blue);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  const chroma = max-min;
  let hue = 0;
  const lightness = max;
  let saturation = 0;

  if (lightness > 0) {
    saturation = chroma / lightness;

    if (saturation > 0) {
      if (r === max) {

        hue = 60 * (((g - min) - (b - min)) / chroma);

        if (hue < 0) {
          hue += 360;
        }
      }
      else if (g === max) {
        hue = 120 + 60 * (((b - min) - (r - min)) / chroma);
      } 
      else if (b === max) {
        hue = 240 + 60 * (((r - min) - (g - min)) / chroma);
      }
   }
  }

  return hue;
}
