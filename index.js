const StudentController  = require("./controllers/student_controller.js")
const command = process.argv.slice(2)

class Index{
    constructor(command){
        this.command = command
    }

    executeCommand(){
        switch(this.command[0]){
            case 'addStudent':
                StudentController.add(this.command.slice(1))
            break;
            case 'showFullName':
                StudentController.getFullName()
            break;
            case 'showAge':
                StudentController.getAge()
            break;
            case 'showFemale':
                StudentController.getFemale()
            break;
        }
    }
}

let action= new Index(command)
action.executeCommand()