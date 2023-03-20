import React, { memo, createContext, useState } from 'react';

export const PodcastContext = createContext();

function PodcastProvider({ children }) {
  const [podcastDescription, setPodcastDescription] = useState('');

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const podcastData = { podcastDescription, setPodcastDescription };

  return (
    <PodcastContext.Provider value={podcastData}>
      {children}
    </PodcastContext.Provider>
  );
}

export default memo(PodcastProvider);
