import React from 'react';

export const firstUpper = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const formatDate = (dateStr) => {
  const date = new Date(dateStr * 1000).toLocaleTimeString('en-US');
  return `${date.split(':')[0]} ${date.slice(-2)}`;
};

export const formatCondition = (alt, icon) => (
  <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={alt} />
);
