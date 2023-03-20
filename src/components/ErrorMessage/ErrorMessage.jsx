import React, { memo } from 'react';

import './ErrorMessage.css';
import { Link } from 'react-router-dom';

function ErrorMessage({ error }) {
  return (
    <div>
      <div className="error">{error.message}</div>
      <div className="error">
        Try to refresh the page or
        <Link to="/"> go to main Page</Link>
      </div>
    </div>
  );
}

export default memo(ErrorMessage);
