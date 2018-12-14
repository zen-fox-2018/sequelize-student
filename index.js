
const command = process.argv.slice(2)
const Controller = require('./Controller.js')

switch (command[0]) {
    case "add":
        let obj = {
            first_name : command[1],
            last_name: command[2],
            gender:  command[3],
            birthday: command[4],
            email: command[5],
            phone: command[6],
            createAt: new Date(),
            updateAt: new Date()
        }
        Controller.create(obj)
        break;
    case "find_all":
        Controller.readAll()
        break;
    case "find_one":
        Controller.readbyId()
        break;
    case "delete":
        Controller.delete(command[1])
        break;
    case "update":
    Controller.update()
        break;
    case "findfemale":
        Controller.findFemale()
    default:
        break;
}