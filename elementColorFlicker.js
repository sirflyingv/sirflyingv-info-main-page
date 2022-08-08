function elementColorFlicker(element, colorDeltaMax, interval) {
  // Getting constant part of color value
  const colorBase = 255 - colorDeltaMax;
  // helper function to calculate random part of color value
  const colorRandom = deltaMax => Math.trunc(Math.random() * deltaMax);

  const randomizeElementColor = function () {
    const r = colorBase + colorRandom(colorDeltaMax);
    const g = colorBase + colorRandom(colorDeltaMax);
    const b = colorBase + colorRandom(colorDeltaMax);
    const opacity = Math.random() / 10 + 0.8;
    element.style.color = `rgb(${r}, ${g}, ${b}, ${opacity})`;
  };

  setInterval(randomizeElementColor, interval);
}

export default elementColorFlicker;
