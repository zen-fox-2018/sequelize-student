const StudentController = require('./Controller/StudentController')
const argv = process.argv.slice(2)
const command = argv[0]
const input = argv.slice(1)


switch (command) {
    case "showFemale":
        StudentController.getFemaleStudent()
        break;
    case "add":
        StudentController.add(input)
        break;
    case "update": 
        StudentController.update(input)
    default:
        break;
}