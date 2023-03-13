import React, { memo } from 'react';

import './ErrorMessage.css';

function ErrorMessage({ error }) {
  return <div className="error">{error}</div>;
}

export default memo(ErrorMessage);
