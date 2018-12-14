const Model = require('../models')
const View = require('../views/View')

class Controller {
    static create(input) {
        let data = {
            first_name: input.first_name,
            last_name : input.last_name,
            gender: input.gender,
            bitrhday: input.birthday,
            email: input.email,
            phone: input.phone,
            Height: input.height,
        }
        Model.Student.create(data)
            .then((data) => {
                View.displaySuccess('Success input data')
                View.displaySuccess(data.dataValues)
                process.exit()
            })
            .catch(err => {
                View.displayError('Err : ', err)
                process.exit()
            })
    }

    static update(input) {
        let field = input.field
        let value = input.value
        Model.Student.update({
            [field]: value,
            id: input.id
        }, {
            where: {
                id: input.id,
            }
        })
        .then(() => {
            View.displaySuccess('Success update data')
            process.exit()
        })
        .catch(err => {
            View.displayError('Error update author', err)
            process.exit()
        })
    }

    static getFullName() {
        Model.Student.findAll()
            .then(data => {
                data.forEach(element => {
                    View.displaySuccess(element.getFullName())
                });
                process.exit()
            }).catch(err => {
                View.displayError(err)
                process.exit()
            });
    }

    static getAge() {
        Model.Student.findAll()
            .then(data => {
                data.forEach(element => {
                    View.displaySuccess(`Name: ${element.getFullName()}, Age: ${element.getAge()} Years Old`)
                })
                process.exit()
            })
            .catch(err => {
                View.displayError(err)
                process.exit()
            })
    }

    static getFemaleStudents() {
        Model.Student.getFemaleStudents()
            .then(data => {
                data.forEach(element => {
                    let obj = {
                        first_name : element.dataValues.first_name,
                        last_name : element.dataValues.last_name,
                        full_name : element.dataValues.full_name,
                        bitrhday : element.dataValues.bitrhday
                    }
                    View.displaySuccess(obj)
                })
                process.exit()
            })
            .catch(data => {
                View.displayError(data)
                process.exit()
            })
    }
}

module.exports = Controller
