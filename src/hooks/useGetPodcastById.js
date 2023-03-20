import { useEffect, useState } from 'react';

import { dateFormat, fetcher, millisToMinutes } from '../utils';

const useGetPodcastById = (podcastId) => {
  const url = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [podcast, setPodcast] = useState();

  const saveInCookies = (podcastData) => {
    const expires = new Date(Date.now() + 86400000).toUTCString(); // 1 day in milliseconds

    document.cookie = `${podcastId}=${JSON.stringify(
      podcastData,
    )}; expires=${expires}; path=/`;
  };

  const podcastSerialize = (wrapperTrack, episodesCollection) => ({
    id: podcastId,
    imageSrc: [wrapperTrack?.artworkUrl100],
    artistName: wrapperTrack.artistName,
    collectionName: wrapperTrack.collectionName,
    episodes: episodesCollection.map((episode) => ({
      id: episode.trackId,
      name: episode.trackName,
      date: dateFormat(episode.releaseDate),
      duration: millisToMinutes(episode.trackTimeMillis),
      description: episode.description,
      trackViewUrl: episode.trackViewUrl,
      episodeUrl: episode.episodeUrl,
      episodeType: `${episode.episodeContentType}/${episode.episodeFileExtension}`,
    })),
  });

  const getPodcastFromCookie = () => {
    const cookies = document.cookie.split('; ');
    let savedPodcast;

    for (let i = 0; i < cookies.length; i += 1) {
      const parts = cookies[i].split('=');
      if (parts[0] === podcastId) {
        savedPodcast = decodeURIComponent(parts[1]);
        break;
      }
    }

    return savedPodcast ? JSON.parse(savedPodcast) : undefined;
  };

  useEffect(() => {
    setIsLoading(true);

    const savedPodcast = getPodcastFromCookie();
    if (savedPodcast) {
      setPodcast(savedPodcast);
      setIsLoading(false);

      return;
    }

    fetcher(url)
      .then((response) => response.json())
      .then((data) => {
        if (data?.results) {
          const filteredEpisodes = data.results.filter(
            (item) => item.kind === 'podcast-episode',
          );

          const foundPodcast = data.results.find(
            (item) => item.kind === 'podcast',
          );

          const podcastSerializable = podcastSerialize(
            foundPodcast,
            filteredEpisodes,
          );

          setPodcast(podcastSerializable);

          saveInCookies(podcastSerializable);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [podcastId]);

  return { podcast, isLoading, error };
};

export default useGetPodcastById;
