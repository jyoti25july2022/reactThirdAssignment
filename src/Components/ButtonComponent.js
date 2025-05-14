import React from 'react';

const ButtonComponent = () => {
  const handleClick = () => {
    console.log('Button was clicked!');
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
};

export default ButtonComponent;
