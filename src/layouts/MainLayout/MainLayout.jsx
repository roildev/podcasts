import React, { memo } from 'react';
import Header from '../../components/Header/Header';

import './MainContent.css';

function MainLayout({ children }) {
  return (
    <div className="container">
      <Header />
      <div className="content" />
      {children}
    </div>
  );
}

export default memo(MainLayout);
