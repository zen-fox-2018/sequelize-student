const Models = require('./models')
const view = require('./View')
class Controller {
    static getFullName() {
        Models.Students.findAll()
        .then(function(StudentData) {
            let names = []
            StudentData.forEach(Data => {
                let TheName = Data.getFullName()
                names.push(TheName)
            });
            view.showNames(names)
        })
        .catch(function(err){
            view.showErr(err)
        })
    }
    static getAge() {
        Models.Students.findAll()
        .then(function(StudentData) {
            StudentData.forEach(theData => {
                let TheName = theData.getFullName()
                let age = theData.getAge()
                view.showAge(TheName, age)
            })
        })
        .catch(function() {

        })
    }
    static addStudent(command) {
        Models.Students.create({
            first_name: command[0],
            last_name: command[1],
            gender: command[2],
            birthday: command[3],
            email: command[4],
            phone: command[5],
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(function() {
            view.addDataSucceed()
        })
        .catch(function(err) {
            view.showErr(err)
        })
    }
    static getFemales() {
        Models.Students.getFemaleStudents()
        .then(function(theData) {
            theData.forEach(dataFemales => {
                view.getFemales(dataFemales.dataValues)
            })
        })
        .catch(function(err) {
            view.showErr(err)
        })
    }
}
module.exports = Controller;