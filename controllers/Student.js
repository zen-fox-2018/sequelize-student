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
        StudentView.showErr(err.errors[0].message);
      })
  }

  static updateStudent(data) {
    let id = data.splice(-1,1);
    let obj = {};
    for (var i = 0; i < data.length; i+=2) {
      obj[data[i]] = data[i+1];
    }
  //   Model.Student.update(obj, {where:{id : id}})
  //     .then(data => {
  //       if (data[0] === 1) {
  //         StudentView.showData(`Successfully update student`)
  //       } else {
  //         StudentView.showErr(`Student id not found`)
  //       }
  //     })
  //
  //     .catch((err) => {
  //       StudentView.showErr(err.errors[0].message);
  //     })
  // }

  Model.Student.findByPk(+id)
    .then(student => {
      return student.update(obj)
    })

    .then(() => {
      StudentView.showData(`Successfully update student`)
    })
    .catch(err => {
      StudentView.showErr(err.errors[0].message);
    })
  }
}

module.exports = Student;