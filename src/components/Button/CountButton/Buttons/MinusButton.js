import React from 'react';
import Button from '../DefaultButton/Button';

const MinusButton = ({text, countMinus}) => {
  return <Button buttonText={text} buttonColor="skyblue" count={countMinus} />;
};

export default MinusButton;
