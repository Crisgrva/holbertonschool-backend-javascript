export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const students = studentList.filter(({ location }) => location === city);
  return students.map(({ id, firstName, location }) => {
    const grades = newGrades.find(({ studentId }) => studentId === id);
    const grade = grades && grades.grade ? grades.grade : 'N/A';
    return {
      id,
      firstName,
      location,
      grade,
    };
  });
}
