import React from 'react';
import { Link } from 'react-router-dom';

import './menuItem.scss';
import { Sections } from './type';

const MenuItem = ({ title, imageUrl, linkUrl, size }: Sections) => (
  <Link to={linkUrl} className={`menu-item ${size || ''}`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl}})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toLocaleUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </Link>
);

export default MenuItem;
