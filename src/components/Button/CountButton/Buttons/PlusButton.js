import React from 'react';
import Button from '../DefaultButton/Button';

const PlusButton = ({text, countPlus}) => {
  return <Button buttonText={text} buttonColor="tomato" count={countPlus} />;
};

export default PlusButton;
