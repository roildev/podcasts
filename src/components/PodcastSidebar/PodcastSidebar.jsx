import React, { memo } from 'react';

import './PodcastSidebar.css';
import { useNavigate } from 'react-router-dom';

function PodcastSidebar({ podcast, description }) {
  const navigate = useNavigate();

  const handleClick = () =>
    navigate(`/podcast/${podcast.id}`, {
      state: { description },
    });

  return (
    <>
      <div className="podcast-sb__item">
        <div className="podcast-sb__image">
          <img src={podcast.imageSrc} alt={podcast.artistName} />
        </div>
      </div>
      <div className="podcast-sb__item">
        <button
          type="button"
          className="podcast-sb__title main-subtitle"
          onClick={handleClick}
        >
          {podcast.collectionName}
        </button>
        <button
          type="button"
          className="main-description podcast-sb__subtitle"
          onClick={handleClick}
        >
          by {podcast.artistName}
        </button>
      </div>
      <div className="podcast-sb__item">
        <div className="main-subtitle">Description:</div>
        <div className="main-description">{description}</div>
      </div>
    </>
  );
}

export default memo(PodcastSidebar);
