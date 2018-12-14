const Model = require(`../models`)
const View = require(`../Views/View`)
const Student = Model.Student

class ControllerStudents {
    static getFullName() {
        Student.findAll()
            .then((result) => {
                View.show(result.map(e => {
                    return e.getFullName()
                }))
                
            }).catch((err) => {
                View.show(err)
            });
    }

    static getAge() {
        Student.findAll().then((result) => {
            let data = result.map(e => {
                return e.getAge()
            })
            View.show(data)
            
        }).catch((err) => {
            View.error(err)
        });
    }

    static getFemaleStudent() {
        Student.findAll().then((result) => {
            View.show(result.map(e => {
                return Student.getFemaleStudent(e.dataValues)
            }))
        }).catch((err) => {
            View.error(err)
        });
    }

    static addStudent(data) {
        Student.create({
            first_name: `Taqi`,
            last_name: `Abdul`,
            gender: `Male`,
            birthday: `3/15/1996`,
            email: `ta1w1qi@mail.com`,
            phone: "87723877323",
            height: 160
        }).then((result) => {
            
        }).catch((err) => {
            View.error(err.errors[0].message)
        });
    }
}

module.exports = ControllerStudents