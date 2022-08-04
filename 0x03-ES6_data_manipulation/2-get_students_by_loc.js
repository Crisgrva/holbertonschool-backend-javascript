export default function getStudentsByLocation(studentList, city) {
  return studentList.filter(({ location }) => location === city);
}
