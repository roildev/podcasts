import React, { memo } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

import { useGetPodcastById } from '../../hooks';

import './Podcast.css';
import { MainLayout } from '../../layouts';
import { ErrorMessage, Loader } from '../../components';
import { dateFormat, millisToMinutes } from '../../utils';

function Podcast() {
  const { podcastId } = useParams();
  const location = useLocation();

  const { description } = location.state;

  const { podcast, episodes, isLoading, error } = useGetPodcastById(podcastId);

  console.log('episodes', episodes);

  const imageSrc = podcast?.artworkUrl100;

  if (error) return <ErrorMessage error={error} />;

  if (isLoading) return <Loader />;

  if (!podcast) return null;

  return (
    <MainLayout>
      <div className="podcast">
        <div className="podcast-block podcast-info">
          <div className="podcast-info__item">
            <div className="podcast-info__image">
              <img src={imageSrc} alt={podcast.artistName} />
            </div>
          </div>
          <div className="podcast-info__item">
            <div className="podcast-info__title">{podcast.collectionName}</div>
            <div className="podcast-info__subtitle">
              by {podcast.artistName}
            </div>
          </div>
          <div className="podcast-info__item">
            <div className="podcast-info__description-caption">
              Description:
            </div>
            <div className="podcast-info__description">{description}</div>
          </div>
        </div>
        <div className="podcast-episodes-info">
          <div className="podcast-block">Episodes: {episodes.length}</div>
          <div className="podcast-block podcast-episodes">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {episodes.map((episode) => (
                  <tr key={episode.trackId}>
                    <td>
                      <Link
                        to={`/podcast/${episode.collectionId}/episode/${episode.trackId}`}
                      >
                        {episode.trackName}
                      </Link>
                    </td>
                    <td>{dateFormat(episode.releaseDate)}</td>
                    <td>{millisToMinutes(episode.trackTimeMillis)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default memo(Podcast);
