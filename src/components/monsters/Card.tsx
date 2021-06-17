import React, { useEffect } from 'react';
import { Monsters } from './type';

const Card = ({ monster }: { monster: Monsters }) => {
  return (
    <li className="card">
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </li>
  );
};

export default Card;
