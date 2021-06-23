import React, { useState } from 'react';

import CollectionItem from './CollectionItem';

import SHOP_DATA from './shop.data';

import './collectionPreview.scss';

const CollectionPreview = () => {
  const [collections] = useState(SHOP_DATA);

  return (
    <>
      {collections.map(({ id, title, items }) => (
        <div className="collection-preview" key={id}>
          <h1 className="title">{title}</h1>
          <div className="preview">
            {items
              .filter((_, idx) => idx < 4)
              .map(({ id, ...otherItemProps }) => (
                <CollectionItem key={id} {...otherItemProps} />
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default CollectionPreview;
