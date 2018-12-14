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
        notEmpty: true
      }
    },
    phone: DataTypes.STRING,
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