const getTrancateString: string = (text: string, limit: number) => {
  return text.length > limit ? text.slice(0, limit) + '...' : text;
};
export default getTrancateString;
