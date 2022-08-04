export default function hasValuesFromArray(set, array) {
  const values = array.map((element) => set.has(element));
  return values.every((currentValue) => currentValue === true);
}
