'use strict';
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    bitrhday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isUnique: function (value) {
          return Student.findOne({
            where : {
              email : value
            }
          })
            .then(data => {
            
              if(data.dataValues.id != this.id) {
                throw new Error('Email has been registered!')
              }
            })
            .catch(err => {
              throw new Error(err)
            })
        },
        isEmail: {
          args: true,
          msg: 'Email format Wrong. ex: test@mail.com'
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10 - 13],
          msg: 'Phone length mus be 10 - 13'
        },
        // isAlpha: {
        //   args: false,
        //   msg: 'Phone could no contain letters'
        // },
        isAlphanumeric: {
          args: true,
          msg: 'Phone could not contain non-alphanumeric'
        }
      }
    },
    Height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: 'Minimum heigh is 150'
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function() {
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function() {
    let yearBirth = this.bitrhday.split('-')
    let yearNow = new Date().getFullYear()
    return (Number(yearNow) - Number(yearBirth[0]))
  }

  Student.getFemaleStudents = function() {
    return new Promise((resolve, reject) => {
      Student.findAll({
        where: {
          gender: {
            [Op.like] : '%female'
          }
        }
      })
      .then(data => {
        let femaleStudent = data.map(student => {
          student.dataValues.full_name = student.getFullName();
          return student
        })
        resolve(femaleStudent)
      })
      .catch(err => {
        reject(err)
      })
    })
  }
  return Student;
};