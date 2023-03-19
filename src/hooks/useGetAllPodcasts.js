import { useEffect, useState } from 'react';
import { fetcher } from '../utils';

const useGetAllPodcasts = (limit = 100, genre = '1310') => {
  const url = `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=${genre}/json`;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetcher(url)
      .then((response) => response.json())
      .then((data) => {
        const podcastsCollection = data?.feed?.entry;

        setPodcasts(podcastsCollection);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { podcasts, isLoading, error };
};

export default useGetAllPodcasts;
