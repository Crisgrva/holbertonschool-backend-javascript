export default function getStudentIdsSum(studentList) {
  const studentListId = studentList.map(({ id }) => id);
  return studentListId.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
}
