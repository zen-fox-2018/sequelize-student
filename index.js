const argv = process.argv.slice(2);
const Student = require('./controllers/Student')
class MyStudents {
  constructor(command) {
    this.command = command;
  }

  playIt() {
    switch (this.command[0]) {
      case 'students':
        switch (this.command[1]) {
          case 'showAll':
            Student.showStudents();
            break;

          case 'showFemale':
            Student.showFemaleStudents();
            break;

          case 'add':
            Student.addStudent(this.command.slice(2));
            break;

          default:
          console.log(`Salah bosss`);

        }
        break;
      default:
        console.log(`Salah bosss`);
    }
  }
}
let myStudents = new MyStudents(argv);
myStudents.playIt();