const Model = require('../models')
const View = require('../views/View.js')

class Controller {

  static findAll() {
    Model.Student.findAll()

      .then(function(students) {
        students.forEach(function(student) {
          student.dataValues["full_name"] = student.getFullName()
          student.dataValues["age"] = student.getAge()
          View.data(student.dataValues)
        })
        process.exit()
      })

      .catch(function(err) {
        View.error(err)
        process.exit()
      })
  }

  static getFemaleStudents() {
    Model.Student.getFemaleStudents()

      .then(function(femaleStudents) {
        femaleStudents.forEach(function(femaleStudent) {
          View.data(femaleStudent.dataValues)
        })
        process.exit()
      })

      .catch(function(err) {
        View.error(err)
        process.exit()
      })
  }

  static create(obj) {
    Model.Student.create(obj)
      .then(function(result) {
        View.data(result)
        process.exit()
      })

      .catch(function(err) {
        View.error(err.message)
        process.exit()
      })
  }

}

module.exports = Controller