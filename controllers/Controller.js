const Model = require('../models')
const Student = Model.Student

const View = require('../views/View')

class Controller {

    static add(arr) {
        let obj = {
            first_name: arr[0],
            last_name: arr[1],
            gender: arr[2],
            birthday: arr[3],
            email: arr[4],
            phone: arr[5],
            tinggiBadan: arr[6]
        }
        Student.create(obj)
            .then(data => {
                View.display(data.dataValues)
            })
            .catch(err => {
                View.disErr(err.errors[0].message)
            })
    }

    static getFullName() {
        Student.findAll()
            .then(students => {
                let result = students.map(student => {
                    return student.getFullName();
                    // return student.first_name
                    // return student.dataValues.getFullName()
                })
                View.display(result)
            })
            .catch(err => {
                View.disErr(err)
            })
    }

    static getAge() {
        Student.findAll()
            .then(students => {
                let result = students.map(student => {
                    // console.log(Date.now());
                    return student.getAge()
                })
                View.display(result)
            })
            .catch(err => {
                View.disErr(err)
            })
    }

    static getFemaleStudents() {
        Student.getFemaleStudents()
            .then(femaleStudents => {
                let result = femaleStudents.map(e => e.dataValues)
                View.display(result)
            })
            .catch(err => {
                View.disErr(err)
            })
    }

}

module.exports = Controller