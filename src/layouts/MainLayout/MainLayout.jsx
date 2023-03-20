import React, { memo } from 'react';

import Header from '../../components/Header/Header';
import { ErrorMessage } from '../../components';

import './MainContent.css';

function MainLayout({ children, isLoading, error }) {
  return (
    <div className="container">
      <Header isLoading={isLoading} />
      <div className="content">
        {error ? <ErrorMessage error={error} /> : children}
      </div>
    </div>
  );
}

export default memo(MainLayout);
