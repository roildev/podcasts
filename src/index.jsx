import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import { Episode, Home, Podcast } from './pages';

import './index.css';
import { PodcastProvider } from './contexts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/podcast/:podcastId',
    element: <Podcast />,
  },
  {
    path: '/podcast/:podcastId/episode/:episodeId',
    element: <Episode />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PodcastProvider>
      <RouterProvider router={router} />
    </PodcastProvider>
  </React.StrictMode>,
);

reportWebVitals();
