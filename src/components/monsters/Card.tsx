import React, { useEffect, useRef, useState } from 'react';
import { CardListProps } from './CardList';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

type Props = {
  monster: CardListProps['monsters'][0];
  length: number;
  index: number;
  ref?: any;
} & Pick<CardListProps, 'fetchMonsters'>;

const Card = ({ monster, length, index, fetchMonsters }: Props) => {
  const ref = useRef<HTMLLIElement | null>(null);
  const [isIntersecting] = useIntersectionObserver(ref, {
    root: undefined,
    rootMargin: undefined,
    threshold: 0.8,
  });

  useEffect(() => {
    isIntersecting && fetchMonsters();
  }, [isIntersecting]);

  return (
    <li
      className="card"
      ref={index === length - 1 ? ref : undefined}
      style={{ height: 500 }}
    >
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=200x200`}
        alt="monster"
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </li>
  );
};

export default Card;
