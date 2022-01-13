import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login } from '@/components/login';
import { Counter } from '@/components/counter';
import { Monsters } from '@/components/monsters';
import Test from '@/components/table/Test';
import { Shop, CollectionPreview, SignPage } from '@/components/shop';
import { Header } from './layout';

import './App.scss';

export default () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="shop" element={<Shop />}>
            <Route path="hats" element={<Login />} />
            <Route path="jackets" element={<Login />} />
            <Route path="sneakers" element={<Login />} />
            <Route path="womens" element={<Login />} />
            <Route path="mens" element={<Login />} />
            <Route path="signin" element={<SignPage />} />
            <Route path="collection" element={<CollectionPreview />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="counter" element={<Counter />} />
          <Route path="table" element={<Test />} />
          <Route path="monsters" element={<Monsters />} />
        </Routes>
      </main>
    </>
  );
};
