const Model = require('../models')
const View = require('../views/view')


class Controller {

  static getFullName() {
    Model.Student.findAll()
      .then( data => {
          let output = data.map( a => a.getFullName()) 
          View.displaySuccess(output)
      })
      .catch( err => {
        View.displayErr(err)
      })
  }

  static getAge() {
    Model.Student.findAll()
      .then( data => {  
          let output = data.map( a => a.getAge()) 
          View.displaySuccess(output)
      })
      .catch( err => {
        View.displayErr(err)
      })
  }

  static getFemaleStudents() {
    Model.Student.getFemaleStudents()
      .then( data => {
        View.displaySuccess(data)
      })
      .catch( err => {
        View.displayErr(err)
      })
  }

  static validationTest(obj) {

    Model.Student.create(obj)
      .then( data  => {
        View.displaySuccess(data)

      })
      .catch( err => {
        if (err) {          
          View.displayErr(err.message)
        }
      })
  }

  static updateCase(obj) {
    Model.Student.update(obj, { where : {id : obj.id}})
      .then( data => {
        View.displaySuccess(data)
      })
      .catch( err => {
        View.displayErr(err)
      })
  }
}
    
module.exports = Controller

let obj = {
  "first_name": "Corine",
  "last_name": "McGrirl",
  "gender": "Female",
  "birthday": "5/15/2009",
  "email": "cmcgrirle@beda.com",
  "phone": "123456789",
  "createdAt": new Date(),
  "updatedAt": new Date(),
  "height": 165
}
Controller.validationTest(obj)
let id = 85
let objek = {
  "id" : 85,
  "first_name": "Maman",
  "last_name": "McDonald",
  "gender": "Not decided",
  "birthday": "5/15/2009",
  "email": "cmcgrirle@beda.com",
  "phone": "12345678910",
  "height": 165
} 
// Controller.updateCase(objek)