import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './shopHeader.scss';

const ShopHeader = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/shop/collection`}>collection</Link>
        </li>
        <li>
          <Link to={`/shop/signin`}>sign in</Link>
        </li>
        <li>
          <button>장빠</button>
        </li>
      </ul>
    </nav>
  );
};

export default ShopHeader;
