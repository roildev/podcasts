import React, { memo } from 'react';

import { Bars } from 'react-loader-spinner';

function Loader() {
  return (
    <div>
      <Bars height="50" width="50" color="#2F7BB0" ariaLabel="loading" />
    </div>
  );
}

export default memo(Loader);
