export const fetcher = (url, body, method = 'GET') =>
  fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
