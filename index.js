const argv = process.argv;
const command = argv.slice(2);

const Controller = require('./controller.js');

switch (command[0]) {
  case 'addStudent':
    Controller.addStudent(command[1],command[2],command[3],command[4],command[5],command[6])
    break;
  case 'update':
    Controller.update(comand[1],command[2],command[3])
    break;
  case 'getFullName':
    Controller.getFullName();
    break;
  case 'getAge':
    Controller.getAge();
    break;
  default:
    Controller.default();
}
