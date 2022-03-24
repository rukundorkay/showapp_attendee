export const formatDate = (dateString: string) => {
  // const options = {year: 'numeric', month: 'long', day: 'numeric'};
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
