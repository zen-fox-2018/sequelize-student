'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "error email validation"
        },
        isUnique(email) {
          return Student.findOne({where: {email: email}})
            .then(data => {
              if (data) {
                throw new Error('email already used')
              }
            })
            .catch(err => {
              throw err
            })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 13],
          msg: 'Phone length must be 10-13'
        },
        isAlphanumeric: {
          args: true,
          msg: 'Phone could not contain non-alhpanumeric'
        },
        isNumeric: {
          args: true,
          msg: 'Phone could not contain letters'
        }
      }
    },
    tinggiBadan: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: [150],
          msg: "min tinggiBadan is 150"
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function() {
    return `${this.first_name} ${this.last_name}`
    // return this
  }

  Student.prototype.getAge = function() {
    let date = new Date()
    return date.getFullYear() - (+this.birthday.split('-')[0])
  }

  Student.getFemaleStudents = function() {
    return new Promise((resolve, reject) => {
      let female = {where: {gender: 'female'}}
      Student.findAll(female)
        .then(students => {
          students.forEach(e => {
            e.dataValues.fullName = e.getFullName()  
          });
          resolve(students)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  return Student;
};