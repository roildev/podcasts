import React, { memo, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { PodcastContext } from '../../../../contexts/PodcastProvider';

import './PodcastItem.css';

function PodcastItem({ podcast }) {
  const { setPodcastDescription } = useContext(PodcastContext);

  const srcImage = podcast['im:image'][1].label;
  const podcastId = podcast.id.attributes['im:id'];
  const description = podcast.summary.label;

  const navigate = useNavigate();

  const handlePodcastClick = () => {
    navigate(`/podcast/${podcastId}`);

    setPodcastDescription(description);
  };

  return (
    <div className="podcast-item">
      <button
        type="button"
        className="podcast-content"
        onClick={handlePodcastClick}
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
