const command = process.argv.slice(2);
const Controller = require('./Controller')
class CommandCenter{
    constructor(command) {
        this.command = command
    }
    runTheCommand() {
        switch(this.command[0]) {
            case "addStudent":
            Controller.addStudent(command.slice(1))
            break;
            case "getFullName":
            Controller.getFullName()
            break;
            case "getAge":
            Controller.getAge()
            break;
            case "getFemaleStudents":
            Controller.getFemales()
            break;
        }
    }
}
const theCommand = new CommandCenter(command)
theCommand.runTheCommand()
