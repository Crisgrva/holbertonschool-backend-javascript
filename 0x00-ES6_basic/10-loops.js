export default function appendToEachArrayValue(array, appendString) {
  const Newarray = [];
  for (const [idx, value] of array.entries()) {
    Newarray[idx] = appendString + value;
  }

  return Newarray;
}
