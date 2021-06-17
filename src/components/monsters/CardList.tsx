import React, { useEffect } from 'react';

import Card from './Card';
import { Monsters } from './type';

const CardList = ({ monsters }: { monsters: Array<Monsters> }) => {
  return (
    <ul className="card_list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </ul>
  );
};

export default CardList;
