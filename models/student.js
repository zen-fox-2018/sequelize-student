'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email:  {
              type: DataTypes.STRING,
              allowNull: false,
              validate: {
                isEmail:true,
                isUnique: function (value, next) {
                  console.log(this);
                            .then((student) => {
                              if (student && this.id !== student.id) {
                                return next({msg : 'Email already in use!'});
                              }
                              return next();
                            })

                            .catch(function (err) {
                              return next(err);
                            });
                }
              }
            },
    height: {
              type : DataTypes.INTEGER,
              validate: {
                          isInt : {
                                  msg : `Height Must Number`
                          },
                          min :  {
                                  args : 150,
                                  msg : `Height Min 150.`
                          }
    }
            },
    phone : {
              type : DataTypes.STRING,
              validate: {
                          isAlphanumeric: {
                            msg : `Phone could not contain not alphanumeric`
                          },
                          isNumeric: {
                            msg : `Phone could not contain letters`
                          },
                          len : {
                            args: [10,13],
                            msg: `Phone length must be 10 - 13`
                          }
              }
    }
}, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  Student.prototype.getFullname = function() {
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function(models) {
    let d = new Date();
    return d.getFullYear() - +this.birthday.substring(0,4);
  }

  Student.getFemaleStudents = function() {
    return new Promise ((resolve, reject) => {
      Student.findAll(
        {
          where : {
                      gender : 'female'
                    }
        }
      )

      .then((students) => {
        resolve(students);
      })

      .catch((err) => {
        reject(err);
      })
    })

  }
  return Student;
};