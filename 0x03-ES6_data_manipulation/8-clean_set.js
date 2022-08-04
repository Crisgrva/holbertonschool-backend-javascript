export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const result = [];
  const arrFromSet = [...set];
  arrFromSet.forEach((string) => {
    if (string && typeof startString === 'string' && string.startsWith(startString)) {
      result.push(string.slice(startString.length));
    }
    return '';
  });
  return result.join('-');
}
