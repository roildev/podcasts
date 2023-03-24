import React, { memo, useState, useEffect } from 'react';

import { Input } from '../../components';
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
        podcast['im:artist'].label
          .toLowerCase()
          .includes(keyword.toLowerCase()) ||
        podcast['im:name'].label.toLowerCase().includes(keyword.toLowerCase()),
    );

    setAllPodcasts(podcastsFiltered);
  }, [keyword]);

  return (
    <MainLayout isLoading={isLoading} error={error}>
      {allPodcasts && (
        <div className="home">
          <div className="home__header">
            <div className="home__search-group">
              <div className="tag">{allPodcasts.length}</div>
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
      )}
    </MainLayout>
  );
}

export default memo(Home);
