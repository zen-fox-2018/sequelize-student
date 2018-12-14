const argv = process.argv.slice(2)

const Controller = require('./controllers/Controller')

switch (argv[0]) {

    case'add':
        Controller.add(argv.slice(1))
        break;

    case'update':
        Controller.update(argv.slice(1))
        break;    

    case 'getFullName':
        Controller.getFullName()
        break;

    case 'getAge':
        Controller.getAge()
        break;

    case 'getFemaleStudents':
        Controller.getFemaleStudents()
        break;

    default:
        break;
}