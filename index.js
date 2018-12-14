const command = process.argv.slice(2)

const StudentController = require('./controllers/StudentController')

switch (command[0]) {
    case `add`:
        StudentController.addStudent(command[1],command[2],command[3], command[4], command[5], command[6], command[7])
        break;
    case `show`:
        StudentController.readStudent()
        break;
    case `getFullName`:
        StudentController.readStudentFullName()
        break;
    case `update`:
        StudentController.updateStudentData(command[1], command[2], command[3])
        break;
    case `showFemale`:
        StudentController.showFemaleStudents()
    default:
        break;
}