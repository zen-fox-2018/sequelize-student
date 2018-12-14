const argv = process.argv.slice(2)
const command = argv[0]
const ControllerStudent = require(`./Controllers/ControllerStudent`)

switch (command) {
    case `getFullName`:
        ControllerStudent.getFullName()
        break;

    case `getAge`:
        ControllerStudent.getAge()
        break;

    case `getFemaleStudents`:
        ControllerStudent.getFemaleStudent()
        break;

    case value:

        break;
}
