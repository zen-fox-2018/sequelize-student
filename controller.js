const Model = require('./models')
const View = require('./view.js')
class Controller {

  static createStudent (firstname, lastname, gender, birthday, email, phone, height) {
    let student = {
      first_name: firstname,
      last_name: lastname,
      gender: gender,
      birthday: birthday,
      email: email,
      phone: phone,
      ['Tinggi Badan'] : height,
      createdAt:new Date(),
      updatedAt :new Date()
    }
    Model.Student.create(student)
      .then(function(data){
        View.show(data.dataValues)
      })
      .catch(function(err) {
        View.showErr(err.message)
      })
  }

  static findAllStudent () {
    Model.Student.findAll()
    .then (function(data) {
      let result = []
      for(let i = 0; i < data.length; i++) {
        let obj = {fullname : data[i].getFullName(), age : data[i].getAge()}
        result.push(obj)
      }
      View.show(result)
    })
    .catch(function(err) {
      View.showErr(err)
    })
  }

  static getFemale () {
    Model.Student.getFemaleStudents()
    .then(function(data){
      let result = []
      for(let i = 0; i < data.length; i++) {
        let obj = {fullname : data[i].getFullName(), age : data[i].getAge()}
        result.push(obj)
      }
      View.show(result)
    })
    .catch(function(err) {
      View.showErr(err)
    })
  }

  static getUpdateById (idStudent, column, value) {
    let change = {[column]:value}
    Model.Student.update(
      change,{ where: {id: idStudent}}
      )
    .then(function() {
      View.show('data has updated')
    })
    .catch(err => {
      View.showErr(err)
    })
  }
}

// Controller.createStudent('maria', 'Halvorson', 'female', '1997-101-29', 'asa', '44998767835', 200)
// Controller.getUpdateById(1, 'first_name', 'eliza')
// Controller.findAllStudent()
// Controller.getFemale()


