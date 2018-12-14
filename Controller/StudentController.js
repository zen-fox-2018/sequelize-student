const Model = require('../models')
const Student = Model.Student
const View = require('../View/View')

class StudentController {

    static getFemaleStudent() {
        Student.getFemaleStudent()
            .then((data) => {
                // console.log("masuk")
                data.forEach(element => {
                    View.displaySuccess(element.dataValues) 
                });
                process.exit()
            })
            .catch((err) => {
                View.displayErr(err)
                process.exit()
            })
    }

    static add(input) {
        if (input.length !== 7 ){
            View.displayErr("invalid input")
        } else {
            let insert = {
                first_name : input[0],
                last_name : input[1],
                gender: input[2],
                birthday: input[3],
                email: input[4],
                phone: input[5],
                height: Number(input[6])
            }
            Student.create(insert)
                .then((data) => {
                    View.displaySuccess(data)
                    process.exit()
                })
                .catch((err) => {
                    View.displayErr(err.message)
                    process.exit()
                })
        }
    }
}


module.exports = StudentController