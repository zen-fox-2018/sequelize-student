const Model = require('../models');
const StudentView = require('../views/Student')
class Student {
  static showStudents () {
    Model.Student.findAll()
      .then((students) => {
        let dataStudents = students.map ( s => {
          return  {
            fullName : s.getFullname(),
            age : s.getAge(),
            details : s.dataValues
          }
        })
        StudentView.showData(dataStudents);
      })

      .catch(err => {
        StudentView.showErr(err);
      })
  }

  static showFemaleStudents() {
    Model.Student.getFemaleStudents()
      .then((students) => {
        let dataStudents = students.map ( s => {
          return  {
            fullName : s.getFullname(),
            age : s.getAge(),
            details : s.dataValues
          }
        })
        StudentView.showData(dataStudents);
      })

      .catch((err) => {
        StudentView.showErr(err);
      })
  }

  static addStudent(data) {

    let newStudent = {
      first_name : data[0],
      last_name : data[1],
      gender : data[2],
      birthday : data[3],
      email : data[4],
      height : data[5],
      phone : data[6]
    }

    Model.Student.create(newStudent)
      .then((student) => {
        StudentView.showData(`Successfully create students ${JSON.stringify(student)}`);
      })

      .catch((err) => {
        StudentView.showErr(err);
      })
  }
}

module.exports = Student;