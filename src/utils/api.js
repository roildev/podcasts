export const fetcher = (url, body, method = 'GET') =>
  fetch(`https://api.allorigins.win/get?url=${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
