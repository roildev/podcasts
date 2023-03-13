import React, { memo } from 'react';

import './PodcastItem.css';

function PodcastItem({ podcast }) {
  console.log('podcast', podcast);

  const srcImage = podcast['im:image'][1].label;
  return (
    <div className="podcast">
      <div className="podcast-content">
        <img
          src={srcImage}
          alt={podcast['im:name'].label}
          className="podcast-image"
        />
        <div className="podcast-title">{podcast['im:name'].label}</div>
        <div className="podcast-author">{podcast['im:artist'].label}</div>
      </div>
    </div>
  );
}

export default memo(PodcastItem);
