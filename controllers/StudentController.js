const View = require('../views/View')
const Student = require('../models').Student

class StudentController{
  static execute(input) {
    let command = input[0]
    let option = input.slice(1)

    switch (command) {
      case 'add':
        StudentController.add(option)
        break;
      case 'show':
        StudentController.show(option)
        break;
      case 'update':
        StudentController.update(option)
        break;
      case 'get':
        StudentController.get(option)
        break;
      default: View.help()
        break;
    }
  }

  static show() {
    Student.getFemaleStudents()
      .then(data => {
        data.forEach(element => {
          View.display(element.dataValues)
        });
        process.exit()
      })
      .catch(err => {
        View.display(err)
        process.exit()
      })
  }

  static add(option) {
    let obj = {
      first_name: option[0],
      last_name: option[1],
      gender: option[2],
      birthday: option[3],
      email: option[4],
      phone: option[5],
      height: option[6]
    }

    Student.create(obj) 
      .then(data => {
        View.display(data.dataValues)
        process.exit()
      })
      .catch(err => {
        View.display(err.message) 
        process.exit()
      })
  }

  static get(input) {
    let option = input[0]
    let email = input[1]
    
    Student.findOne({where:{email}})
      .then(data => {
        if(!data) {
          View.display(`No such student`)
          process.exit()
        } else {
          if(option == 'fullname') {
            View.display(data.getFullName())
          } else {
            View.display(data.getAge())
          }
          process.exit()
        }
      })
      .catch(err => {
        View.display(err)
        process.exit()
      })
  }
}
module.exports = StudentController