export const formatTime = (time) => {
 const date = new Date(time);
 const moment = date.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
 });
 return moment;
};
