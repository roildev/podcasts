import React, { memo, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import { PodcastSidebar } from '../../components';
import { MainLayout } from '../../layouts';

import { PodcastContext } from '../../contexts/PodcastProvider';

import { useGetPodcastById } from '../../hooks';

import './Podcast.css';

function Podcast() {
  const { podcastId } = useParams();

  const { podcastDescription } = useContext(PodcastContext);

  const { podcast, isLoading, error } = useGetPodcastById(podcastId);

  return (
    <MainLayout isLoading={isLoading} error={error}>
      {podcast && (
        <div className="podcast">
          <div className="block podcast-info">
            <PodcastSidebar
              podcast={podcast}
              description={podcastDescription}
            />
          </div>
          <div className="podcast-episodes-info">
            <div className="block">Episodes: {podcast.episodes.length}</div>
            <div className="block podcast-episodes">
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
                        <Link
                          to={`/podcast/${podcastId}/episode/${episode.id}`}
                        >
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
      )}
    </MainLayout>
  );
}

export default memo(Podcast);
