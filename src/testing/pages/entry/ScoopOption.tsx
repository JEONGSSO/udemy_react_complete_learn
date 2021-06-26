import React from 'react';

const ScoopOption = ({
  name,
  imagePath,
  optionType,
  updateItemCount,
}: {
  name: string;
  imagePath: string;
  optionType: string;
  updateItemCount: any;
}) => {
  return (
    <>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} ${optionType}`}
      />
    </>
  );
};

export default ScoopOption;
