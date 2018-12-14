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
        notEmpty: true,
        isUnique: function(email){
          return Student.findOne({
            where: {
              email: email
            }
          })
          .then(data => {
            if (data.dataValues.email === email)
            throw new Error('ERROR!: Your email has been registered to the system!');
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
          msg: `Phone length must be 10 - 13`
        },
        isNumeric: {
          args: true,
          msg: `Phone could not contain letters`
        },
        isAlphanumeric: {
          args: false,
          msg: `Phone could not contain non-alphanumeric`
        }
      }
    },
    heights: {
      type: DataTypes.INTEGER,
      validate: {
        min: 150
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  //STATIC METHOD
  Student.getFemaleStudents = function () {
    return new Promise((resolve, reject) => {
      Student.findAll(
        {
          where: {gender: 'Female'}
        })
      .then(femmeStudents => {
        let result = []
        femmeStudents.forEach(stu => {
          let readyToAddFullName = stu.dataValues
          let values = Object.values(readyToAddFullName)
          let keys = Object.keys(readyToAddFullName)
          let fullName = stu.getFullName()
          values.unshift(fullName)
          keys.unshift('full_name')
          let obj = {}
          for (let i = 0; i < keys.length; i++) {
            obj[keys[i]] = values[i]
          }
          result.push(obj)
        });
        resolve(result)
      })
      .catch(err => {
        reject(err)
      })
    })
  }

  //INSTANCE METHOD
  Student.prototype.getFullName = function()  {
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function() {
    let currentYear = new Date().getFullYear()
    let birthYear = Number(this.birthday.substring(0, 4));
    return currentYear - birthYear
  }
  return Student;
};