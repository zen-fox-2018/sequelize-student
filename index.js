
const Controller = require("./Controller/controller");
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
    case "getFemaleStudents":
        Controller.femaleStudent();
        break;
    case "add":
        Controller.addNewStudent(args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
        break;
    default:
        break;
}