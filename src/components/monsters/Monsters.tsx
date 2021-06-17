import React, { useState, useEffect, ChangeEvent } from 'react';

import { CardList, SearchBox } from './';

import { fetchData } from '@/modules';
import { Monsters } from './type';

import './monsters.scss';

export default () => {
  const [monsters, setMonsters] = useState<Array<Monsters>>([]);
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    fetchMonsters();
  }, []);

  const fetchMonsters = async (): Promise<void> => {
    const data = await fetchData('https://jsonplaceholder.typicode.com/users');
    setMonsters(data);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="monsters_container">
      <h1 className="title">Monster rolodex</h1>
      <SearchBox keyword={keyword} handleChange={handleChange}></SearchBox>
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
