import React, { useEffect, useRef } from 'react';
import { CardListProps } from './CardList';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

type Props = {
  monster: CardListProps['monsters'][0];
  length: number;
  index: number;
} & Pick<CardListProps, 'fetchMonsters'>;

const Card = ({ monster, length, index, fetchMonsters }: Props) => {
  const ref = useRef<HTMLLIElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (ref) fetchMonsters();
  }, [isVisible]);

  return (
    <li className="card" ref={index === length - 1 ? ref : undefined}>
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
