export default function createIteratorObject(report) {
  let newArray = [];
  for (const listEmployee of Object.values(report.allEmployees)) {
    newArray = newArray.concat([...listEmployee]);
  }
  return newArray;
}
