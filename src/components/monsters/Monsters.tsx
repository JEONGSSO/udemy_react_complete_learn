import React, { useState, useEffect, ChangeEvent } from 'react';

import { CardList, SearchBox } from './';

import { fetchData } from '@/modules';
import { Monsters } from './type';

import './monsters.scss';

export default () => {
  const [monsters, setMonsters] = useState<Monsters[]>([]);
  const [keyword, setKeyword] = useState('');
  const [count, setCount] = useState(8);

  useEffect(() => {
    (async () => {
      const data = await fetchData(
        `https://jsonplaceholder.typicode.com/users`
      );
      setMonsters([...data.splice(0, 3)]);
    })();
  }, []);

  const fetchMonsters = async () => {
    const data =
      (await fetchData(
        `https://jsonplaceholder.typicode.com/users/${count}`
      )) ?? [];
    setMonsters((prevMonsters) => [...prevMonsters, ...[data]]);
    setCount(count + 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const filteredMonsters = monsters?.filter(
    (monster) =>
      monster.name?.toLowerCase().includes(keyword.toLowerCase()) ?? []
  );

  return (
    <div className="monsters_container">
      <h1 className="title">Monster rolodex</h1>
      <SearchBox keyword={keyword} handleChange={handleChange}></SearchBox>
      <CardList monsters={filteredMonsters} fetchMonsters={fetchMonsters} />
    </div>
  );
};
