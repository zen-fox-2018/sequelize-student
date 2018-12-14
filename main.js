const Controller = require('./controllers/controller')
const argv = process.argv.slice(2)
let input = null

switch(argv[0]) {
    case 'getFullName':
        Controller.getFullName()
    break;

    case 'getAge':
        Controller.getAge()
    break;

    case 'getFemaleStudents':
        Controller.getFemaleStudents()
    break;

    case 'create' :
        input = {
            first_name: argv[1],
            last_name : argv[2],
            gender: argv[3],
            birthday: argv[4],
            email: argv[5],
            phone: argv[6],
            height: argv[7],            
        }
        Controller.create(input)
    break;

    case 'update' :
        input = {
            id: argv[1],
            field: argv[2],
            value: argv[3]
        }
        Controller.update(input)
    break;
}