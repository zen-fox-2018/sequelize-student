const Model = require('../models')
const View = require('../views/StudentView.js')

class Controller {
    static add(firstName, lastName, gender, birthday, email, phone, heights) {
        let studentDataWrappedInObj = {
            first_name: firstName,
            last_name: lastName,
            gender: gender,
            birthday: birthday,
            email: email,
            phone: phone,
            heights: heights,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        Model.Student.create(studentDataWrappedInObj)
         .then(studentsData => {
             View.createDataSucceed(studentsData.dataValues)
         })
         .catch(err => {
             View.errorOperation(err)
         })
    }

    static findAll() {
        Model.Student.findAll()
         .then(data => {
             data.forEach(e => {
                 View.findAll(e.dataValues)
             });
         })
         .catch(err => {
             View.errorOperation(err)
         })
    }

    static getFemaleStudents() {
        Model.Student.getFemaleStudents()
        .then(femaleStudents => {
            View.showFemaleStudents(femaleStudents)
        })
        .catch(err => {
            View.errorOperation(err)
        })
    }

    static delete(id) {
        Model.Student.destroy({where: {id: id}})
         .then(() => {
             View.deleteSucceed(id)
         })
         .catch(err => {
             View.errorOperation(err)
         })
    }

    static getFullName() {
        Model.Student.findAll()
        .then(data => {
            data.forEach(e => {
                View.showFullName(e.getFullName())
            });
        })
        .catch(err => {
            View.errorOperation(err)
        })
    }

    static getStudentsAge() {
        Model.Student.findAll()
        .then(data => {
            data.forEach(e => {
                View.showFullName(e.getFullName())
                View.showAges(e.getAge())
            });
        })
        .catch(err => {
            View.errorOperation(err)
        })
    }
}

module.exports = Controller