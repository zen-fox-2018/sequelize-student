'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {type: sequelize.STRING,
      validate: {
        isEmail: true,
        isUnique: function(theEmail, next) {
          let self = this;
          Student
          .findOne({
            where: {
              email: theEmail
            }
          })
          .then(function(student) {
            if (student && self.id != student.id) {
              return next("Email has been used");
            }
            return next();
          })
          .catch(function(err) {
            return next(err)
          })
        }
      }},
    phone: {type: sequelize.STRING,
      validate: {
        len: {
          args: [10, 13],
          msg: "Phone length must be 10-13"
        },
        not: {
          args: /[a-z]+$/i,
          msg: "Phone could not contain letters"
        },
        isAlphanumeric: {
          args: true,
          msg: "Phone could not contain non-alphanumeric"
        }
      }},
    tinggi_badan: {type: sequelize.STRING, validate: {
      min: {
        args: 150,
        msg: "Height must be at least 150 cm"
      }
    }}
  }, {});
  // Student.associate = function(models) {
    // associations can be defined here
  // };
  Student.prototype.getFullName = function() {
    let fullname = this.first_name + " " + this.last_name
    return fullname
  }

  Student.prototype.getAge = function() {
    let birth = new Date(this.birthday);
    let today = new Date();
    let age = today.getFullYear() - birth.getFullYear()
    return age
  }
  Student.getFemaleStudents = function() {
    return new Promise(function(resolve, reject) {
      Student.findAll({where:{gender:'Female'}})
      .then(function(femaleStudents) {
        resolve(femaleStudents)
      })
      .catch(function(err) {
        reject(err)
      })
    })
  }
  return Student;
};