import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { Loader } from '../Loader';

import './Header.css';

function Header({ isLoading }) {
  return (
    <div className="header">
      <Link to="/" className="main-title">
        Podcaster
      </Link>
      {isLoading && <Loader />}
    </div>
  );
}

export default memo(Header);
