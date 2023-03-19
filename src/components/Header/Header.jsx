import React, { memo } from 'react';

import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/">Podcaster</Link>
    </div>
  );
}

export default memo(Header);
