'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value) {
          return Student.findOne({where: {email: value}})
            .then(function(result) {
              if (result) {
                throw new Error('Email already used')
              }
            })

            .catch(function(err) {
              throw new Error(err)
            })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: `Phone length mush be 10 - 13`
        },
        isAlpha: {
          args: false,
          msg: `Phone could not contain letters`
        },
        isAlphanumeric: {
          args: true,
          msg: `Phone could not contain non-alphanumeric`
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: 150
      }
    }

  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function () {
    return `${this.first_name} ${this.last_name}`
  };

  Student.prototype.getAge = function () {
    let yearNow = new Date().getFullYear()
    let yearBirth = Number(this.birthday.slice(0,4))
    let age = yearNow -yearBirth
    return age
  };

  Student.getFemaleStudents = function() {
    let promise = new Promise(function (resolve, reject) {
      Student.findAll()

        .then(function(students) {
          let result = []
          students.forEach(function(student) {
            if (student.dataValues.gender === "female") {
              student.dataValues["full_name"] = student.getFullName()
              result.push(student)
            }
            resolve(result)
          })
        })

        .catch(function(err) {
          reject(err)
        })
    })

    return promise
  }


  return Student;
};