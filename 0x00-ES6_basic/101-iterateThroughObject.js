export default function iterateThroughObject(reportWithIterator) {
  let newArray = [];
  for (const listEmployee of Object.values(report.reportWithIterator)) {
    newArray = newArray.concat([...reportWithIterator]);
  }

  return newArray.join(' | ');
}
