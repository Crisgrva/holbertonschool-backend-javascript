export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const students = studentList.filter(({ location }) => location === city);
  return students.map(({ id, firstName, location }) => {
    const grades = newGrades.find(({ studentId }) => studentId === id);
    let grade = 'N/A';
    grade = grades.grade && grades.grade;
    return {
      id,
      firstName,
      location,
      grade,
    };
  });
}
