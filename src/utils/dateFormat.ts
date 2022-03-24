export const formatDate = (dateString: string) => {
  // const options = {year: 'numeric', month: 'long', day: 'numeric'};
  const options = {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
