const Model = require('./models');
const View = require('./view');

class Controller {
  
  static getFullName() {
    Model.Students.findAll()
    .then((result) => {
      result.forEach(data => {
        View.printData(data.fullName());
      });
    })
    .catch((err) => {
      View.showErr(err);
    });
  }


  static getAge() {
    Model.Students.findAll()
    .then((result) => {
      result.forEach(data => {
        View.printData(data.getAge());
      }); 
    })
    .catch((err) => {
      View.showErr(err);
    });
  }

  static getFemaleStudents() {
    Model.Students.getFemaleStudents()
    .then((result) => {
      result.forEach(femaleStudents => {
        View.printData(femaleStudents.dataValues)
      });
    })
    .catch((err) => {
      View.showErr(err);
    });
  }

  static insertData(fn, ln, gender, br, email, phone) {
    Model.Students.create({
      first_name: fn,
      last_name: ln,
      gender: gender,
      birthday: br,
      email: email,
      phone: phone
    })
    
    .then((data) => {
      View.printData(data.dataValues)
    })
    
    .catch((err) => {
      View.showErr(err);
    });
  }

}

module.exports = Controller;
