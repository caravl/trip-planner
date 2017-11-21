const mapbox = require('mapbox-gl');

const buildMarker = (category, coordinates) => {
  let image = '';
  switch (category) {
    case 'activity':
      image = '(http://i.imgur.com/WbMOfMl.png)';
      break;
    case 'hotel':
      image = '(http://i.imgur.com/D9574Cu.png)';
      break;
    case 'restaurant':
      image = '(http://i.imgur.com/cqR6pUI.png)';
      break;
    default: console.log('here')
  }

  let newMarker = document.createElement('div');
  newMarker.style.width = '32px';
  newMarker.style.height = '39px';
  newMarker.style.backgroundImage = 'url' + image;

  return new mapbox.Marker(newMarker).setLngLat(coordinates);

};

module.exports = buildMarker;
