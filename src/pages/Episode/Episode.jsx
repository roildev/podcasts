import React, { memo, useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { MainLayout } from '../../layouts';
import { AudioPlayer, PodcastSidebar } from '../../components';

import { useGetPodcastById } from '../../hooks';
import { PodcastContext } from '../../contexts/PodcastProvider';

import './Episode.css';

function Episode() {
  const { podcastId, episodeId } = useParams();

  const { podcastDescription } = useContext(PodcastContext);

  const { podcast, isLoading, error } = useGetPodcastById(podcastId);

  const episode = useMemo(() => {
    if (!podcast) return null;

    return podcast.episodes.find(
      (episodeItem) => episodeItem.id === Number(episodeId),
    );
  }, [podcast, episodeId]);

  return (
    <MainLayout isLoading={isLoading} error={error}>
      {podcast && (
        <div className="episode">
          <div className="block episode-podcast-info">
            <PodcastSidebar
              podcast={podcast}
              description={podcastDescription}
            />
          </div>
          <div className="episode-info">
            <div className="block">
              <div className="episode-info__item">
                <div className="main-title">{episode.name}</div>
                <div
                  className="episode__description main-description"
                  dangerouslySetInnerHTML={{ __html: episode.description }}
                />
              </div>
              <div className="episode-info__item">
                <AudioPlayer
                  source={episode.episodeUrl}
                  type={episode.episodeType}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}

export default memo(Episode);
