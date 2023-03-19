import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import './PodcastItem.css';

function PodcastItem({ podcast }) {
  const srcImage = podcast['im:image'][1].label;
  const podcastId = podcast.id.attributes['im:id'];
  // console.log('podcas t.summary. label', podcast.summary.label);
  const navigate = useNavigate();

  return (
    <div className="podcast-item">
      <button
        type="button"
        className="podcast-content"
        onClick={() =>
          navigate(`/podcast/${podcastId}`, {
            state: { description: podcast.summary.label },
          })
        }
      >
        <img
          src={srcImage}
          alt={podcast['im:name'].label}
          className="podcast-image"
        />
        <div className="podcast-title">{podcast['im:name'].label}</div>
        <div className="podcast-author">{podcast['im:artist'].label}</div>
      </button>
    </div>
  );
}

export default memo(PodcastItem);
