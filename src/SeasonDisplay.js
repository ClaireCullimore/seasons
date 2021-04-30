import React from 'react';

// Determine what the season is
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0  ? 'Summer' : 'Winter';
  } else {
    return lat > 0 ? 'Winter' : 'Summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.late, new Date().getMonth());

  console.log(season);

  return <div>Season Display</div>
};

export default SeasonDisplay;
