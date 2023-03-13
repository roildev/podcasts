import React, { memo, useState, useEffect } from 'react';

import { ErrorMessage, Input, Loader } from '../../components';
import { PodcastItem } from './components';
import { MainLayout } from '../../layouts';

import { useGetAllPodcasts } from '../../hooks';

import './Home.css';

function Home() {
  const [keyword, setKeyword] = useState('');
  const [allPodcasts, setAllPodcasts] = useState([]);

  const { podcasts, isLoading, error } = useGetAllPodcasts();

  useEffect(() => {
    setAllPodcasts(podcasts);
  }, [podcasts]);

  useEffect(() => {
    if (!podcasts) return;

    if (!keyword) {
      // reset podcasts filter
      setAllPodcasts(podcasts);
    }

    const podcastsFiltered = podcasts.filter(
      (podcast) =>
        podcast['im:artist'].label.includes(keyword) ||
        podcast['im:name'].label.includes(keyword),
    );

    setAllPodcasts(podcastsFiltered);
  }, [keyword]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  if (!allPodcasts) return null;
  return (
    <MainLayout>
      <div className="home">
        <div className="home__header">
          <div className="home__search-group">
            <div className="tag">100</div>
            <Input
              value={keyword}
              onChange={setKeyword}
              placeholder="Filter podcasts..."
            />
          </div>
        </div>
        <div className="home__content">
          {allPodcasts.map((podcast) => (
            <PodcastItem
              key={podcast.id.attributes['im:id']}
              podcast={podcast}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default memo(Home);
