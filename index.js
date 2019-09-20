
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
    case "update":
        let obj = {
            id: args[1],
            first_name: args[2],
            last_name: args[3],
            gender: args[4],
            birthday: args[5],
            email: args[6],
            phone: args[7]
        }
        Controller.update(obj)
        break;
    default:
        break;
}