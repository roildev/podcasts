import React, { memo } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

import { useGetPodcastById } from '../../hooks';

import './Podcast.css';
import { MainLayout } from '../../layouts';
import { ErrorMessage, Loader } from '../../components';

function Podcast() {
  const { podcastId } = useParams();
  const location = useLocation();

  const { description } = location.state;

  const { podcast, isLoading, error } = useGetPodcastById(podcastId);

  if (error) return <ErrorMessage error={error} />;

  if (isLoading) return <Loader />;

  if (!podcast) return null;

  return (
    <MainLayout>
      <div className="podcast">
        <div className="podcast-block podcast-info">
          <div className="podcast-info__item">
            <div className="podcast-info__image">
              <img src={podcast.imageSrc} alt={podcast.artistName} />
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
          <div className="podcast-block">
            Episodes: {podcast.episodes.length}
          </div>
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
                {podcast.episodes.map((episode) => (
                  <tr key={episode.id}>
                    <td>
                      <Link to={`/podcast/${podcastId}/episode/${episode.id}`}>
                        {episode.name}
                      </Link>
                    </td>
                    <td>{episode.date}</td>
                    <td>{episode.duration}</td>
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
