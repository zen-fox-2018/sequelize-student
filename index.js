const argv = process.argv.slice(2)
const Controller = require('./controllers/StudentController.js')
const command = argv[0]

switch (command) {
    case 'add':
        Controller.add(argv[1], argv[2], argv[3], argv[4], argv[5], argv[6], argv[7])
        break;
    case 'showAllFemaleStudents':
        Controller.getFemaleStudents()
        break;
    case 'delete':
        Controller.delete(argv[1])
        break;
    case 'findAll':
        Controller.findAll()
        break;
    case 'getAge':
        Controller.getStudentsAge()
        break;
    case 'getFullName':
        Controller.getFullName()
        break;
    default:
        console.log('Keyword is Unavailable!')
        break;
}