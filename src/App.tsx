import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login } from '@/components/login';
import { Counter } from '@/components/counter';
import { Monsters } from '@/components/monsters';
import Test from '@/components/table/Test';
import {
  Shop,
  CollectionPreview,
  SignPage,
} from '@/components/shop';
import { Header } from './layout';

import './App.scss';

export default () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<div>123</div>}></Route>
        <Route path="/login" element={Login}></Route>
        <Route path="/counter" element={Counter}></Route>
        <Route path="/table" element={Test}></Route>
        <Route path="/monsters" element={Monsters}></Route>
      </Routes>
    </main>
  </>
);
