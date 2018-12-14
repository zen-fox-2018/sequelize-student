const Controller = require('./controller/Controller')
const argv = process.argv.slice(2)

switch(argv[0]) {
    case 'full-name':
        Controller.getAllFullName()
        break;
    case 'age':
        Controller.getAllAge()
        break;
    case 'female-students':
        Controller.getFemaleStudent()
        break;
    case 'add' :
        Controller.createStudent(argv[1], argv[2], argv[3], argv[4], argv[5], argv[6], argv[7])
        break;
}