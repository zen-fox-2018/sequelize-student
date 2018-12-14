'use strict';
module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define('Students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email:
    {
      type: DataTypes.STRING,
      validate: {
        isUnique: function (value) {
          return Students.findOne({
            where:
            {
              email: value
            }
          })
            .then((result) => {
              if (result.dataValues.email == value) {
                throw new Error('Email already exists');
              }
            })
            .catch((err) => {
              throw err
            });
        },
        isEmail: true
      }
    },
    phone:
    {
      type: DataTypes.STRING,
      validate:
      {
        len: {
          args: [[10, 13]],
          msg: 'Validation error: Phone length must be 10 - 13'
        }
      }
    }
  }, {});
  Students.associate = function (models) {
    // associations can be defined here
  };

  // Instance Methods
  Students.prototype.fullName = function () {
    return `${this.first_name} ${this.last_name}`
  }

  Students.prototype.getAge = function () {
    return `${new Date().getFullYear() - (+this.birthday.slice(0, 4))}`
  }


  // Class Methods
  Students.getFemaleStudents = function () {
    return new Promise((resolve, reject) => {
      Students.findAll({
        where: { gender: 'female' }
      })
        .then((result) => {
          result.forEach(data => {
            data.dataValues['fullName'] = `${data.dataValues.first_name} ${data.dataValues.last_name}`;
            resolve(result);
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  return Students;
};
