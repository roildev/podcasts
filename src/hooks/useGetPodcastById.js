import { useEffect, useState } from 'react';
import { fetcher } from '../utils';

const useGetPodcastById = (podcastId) => {
  const url = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [podcast, setPodcast] = useState();
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetcher(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          const filteredEpisodes = data.results.filter(
            (item) => item.kind === 'podcast-episode',
          );
          setEpisodes(filteredEpisodes);

          const foundPodcast = data.results.find(
            (item) => item.kind === 'podcast',
          );
          setPodcast(foundPodcast);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [podcastId]);

  return { podcast, episodes, isLoading, error };
};

export default useGetPodcastById;
