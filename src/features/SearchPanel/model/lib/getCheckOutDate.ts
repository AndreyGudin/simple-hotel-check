export const getCheckOutDate = (date: string, count: string): string => {
  const d = new Date(date);
  const days = d.getDate() + parseInt(count, 10);
  const month = d.getMonth();
  const year = d.getFullYear();
  return new Date(year, month, days).toISOString().split('T')[0];
};
