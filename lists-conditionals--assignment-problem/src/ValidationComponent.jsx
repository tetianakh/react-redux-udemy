import React from 'react';

const MIN_LENGTH = 5

const validator = (props) => {
  let text = "Text is long enough";
  if (props.text.length < MIN_LENGTH) {
    text = "Text is too short"
  };
  return (<p>{text}</p>);
};

export default validator;
