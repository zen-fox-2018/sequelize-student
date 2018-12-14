
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
        isUnique: function(value) {
          // console.log(this)
          return Student.findOne(
            {
              where:{ email: value }
            }
          ).then(email => {
            if(email) {
              throw "Email address has already been used!"
            }
          }).catch(err => {
            throw err
          })
        },
        contains: {
          msg: "That email doesn't look so good!",
          args: ["@", "."]
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          msg: "Phone length must be 10 - 13",
          args: [10, 13]
        },
        isNumeric: {
          msg: "Phone could not contain letters",
          args: true
        },
        isAlphaNumeric: {
          msg: "Phone could not contain non-alphanumeric",
          args: false
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

  // Student.associate = function(models) {
  //   // associations can be defined here
  // };

  Student.prototype.getFullname = function() {

    return `${this.first_name} ${this.last_name}`

  }

  Student.prototype.getAge = function() {

    let currentYear = new Date().getFullYear();

    let age = Number(this.birthday.slice(0, 4));

    return currentYear - age
  }

  Student.getFemaleStudent = function() {
    return new Promise ((resolve, reject) => {
      Student.findAll({
        where:{
          gender:"female"
        }
      })
      .then(data => {
          data.forEach(element => {
            element.dataValues.full_name = element.getFullname()
          });
          resolve(data);

      }).catch(err => {
        reject(err);
      })
    })
  }

  return Student;

};