import React from 'react';

import SHOP_DATA from './shop.data';
import './collectionItem.scss';

type CollectionItemProps = Omit<typeof SHOP_DATA[0]['items'][0], 'id'>;

const collectionItem = ({ name, price, imageUrl }: CollectionItemProps) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default collectionItem;
