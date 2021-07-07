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
        if (!arr[6]) {
            View.disErr('please insert all data')
        } else {
            Student.create(obj)
                .then(data => {
                    View.display(data.dataValues)
                })
                .catch(err => {
                    View.disErr(err.errors[0].message)
                })
        }
    }

    static update(arr) {
        let id = arr[0]
        let obj = {
            first_name: arr[1],
            last_name: arr[2],
            gender: arr[3],
            birthday: arr[4],
            email: arr[5],
            phone: arr[6],
            tinggiBadan: arr[7]
        }
        Student.findOne({where: {id: id}})
            .then(data => {
                if (data.email === obj.email) {
                    delete obj.email
                }
                return Student.update(obj, {where: {id: id}})
            })
            .then(data => {
                View.display(data)
            })
            .catch(err => {
                View.disErr(err)
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