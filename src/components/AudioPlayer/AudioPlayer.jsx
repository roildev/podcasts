import React, { memo } from 'react';

function AudioPlayer({ source, type }) {
  return (
    <audio style={{ width: '100%' }} controls>
      <source src={source} type={type} />
      <track src={source} kind="captions" />
      Your browser does not support the audio element.
    </audio>
  );
}

export default memo(AudioPlayer);
