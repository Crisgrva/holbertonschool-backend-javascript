export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8Arr = new Int8Array(buffer);
  if (position > length - 1) {
    throw Error('Position outside range');
  }
  int8Arr[position] = value;
  return new DataView(buffer);
}
