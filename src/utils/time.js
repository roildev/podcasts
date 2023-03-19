export const millisToMinutes = (milliseconds) =>
  (milliseconds / 1000 / 60).toFixed(2);

export const dateFormat = (date) => new Date(date).toLocaleDateString();
