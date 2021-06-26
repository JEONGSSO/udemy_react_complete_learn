import React from 'react';

const ToppingOptions = ({
  name,
  imagePath,
}: {
  name: string;
  imagePath: string;
}) => {
  return (
    <>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} toppings`}
      />
    </>
  );
};

export default ToppingOptions;
