const argv = process.argv.slice(2);
const Controller = require('./controller');


switch (argv[0]) {
  case 'fullName':
    Controller.getFullName();
    break;
  case 'getAge' :
    Controller.getAge();
    break;

  case 'femaleStudents':
    Controller.getFemaleStudents();
    break;
  
  case 'add':
    Controller.insertData(argv[1],argv[2],argv[3],argv[4],argv[5],argv[6])
  default:
    break;
}