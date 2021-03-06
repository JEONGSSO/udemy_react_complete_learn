import React from 'react';

import Card from './Card';

import { Monsters } from './type';

export type CardListProps = {
  monsters: Monsters[];
  fetchMonsters: () => void;
};

const CardList = ({ monsters, fetchMonsters }: CardListProps) => {
  return (
    <ul className="card_list">
      {monsters.map((monster, index) => (
        <Card
          key={index}
          length={monsters.length}
          index={index}
          monster={monster}
          fetchMonsters={fetchMonsters}
        />
      ))}
    </ul>
  );
};

export default CardList;
