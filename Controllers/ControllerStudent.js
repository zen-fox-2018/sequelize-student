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
            console.log(data);
            
        }).catch((err) => {
            
        });
    }

    static getFemaleStudent() {
        Student.findAll().then((result) => {
            View.show(result.map(e => {
                return Student.getFemaleStudent(e.dataValues)
            }))
        }).catch((err) => {
            
        });
    }
}

module.exports = ControllerStudents