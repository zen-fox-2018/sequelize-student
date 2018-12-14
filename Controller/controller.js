
const Model = require("../models");
const Views = require("../Views/view")

class Controller {
    
    static femaleStudent() {
        Model.Student.getFemaleStudent().then(females => {
            Views.showFemaleStudent(females);
            process.exit()
        }).catch(err => {
            throw err
        })
    }

    static addNewStudent(firstName, lastName, gender, birthday, email, phone, height) {

        let addNewStudent = {
            first_name: firstName,
            last_name: lastName,
            gender: gender,
            birthday: birthday,
            email: email,
            phone: phone,
            createdAt: new Date(),
            updatedAt: new Date(),
            height: height
        }

        Model.Student.create(addNewStudent)
        .then(added => {
            Views.showAddedStudent(added);
        }).catch(err => {
            Views.showError(err)
            process.exit();
        })
    }
}

module.exports = Controller