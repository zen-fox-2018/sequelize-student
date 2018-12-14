'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
            type: DataTypes.STRING,
            validate: 
                      {
                       checkUnique: function (value) {
                         return Student.findOne({where: {email:value}})
                          .then((data) => {
                            if (data) {
                              throw new Error("email has been use")
                            }
                          })
                          .catch((err) => {
                              throw new Error(err)
                          })
                       },
                       isEmail:{
                                args:true,
                                msg: "invalid email"
                               } ,
                      contains: {
                                args: ["@", "."],
                                msg:"invalid email format"
                      }
                      }
           } ,
    phone: {
              type:DataTypes.STRING,
              validate: {
                          len: {
                                  args: [10,13],
                                  msg: "phone length must be 10 - 13"
                                },
                     isNumeric: {
                                  args: true,
                                  msg: "Phone could not contain letters"
                                 },
                isAlphanumeric: {
                                  args: true,
                                  msg: "Phone could not contain non-alphanumeric"
                                 }
              }
           },
    height:{
              type: DataTypes.INTEGER,
              validate: {
                          min: {
                                  args: 151,
                                  msg: "height must be more than 150 cm"
                               }
                        }   
           }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.getFemaleStudent = function () {
    return new Promise ((resolve, reject) => {
      Student.findAll(
                      {
                        where: 
                        {
                          gender: "female"
                        }
                      }
                     )
        .then((data) => {
          data.forEach(element => {
            // let student = element.dataValues
            element.dataValues.full_name = element.getFullName()
          });
          resolve(data)
        })
        
        .catch((err) => {
          reject(err)
        })
    })
  }

  Student.prototype.getFullName = function () {
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function () {
    let date = new Date()
    let age = date - this.birthday
    return age
  }
  return Student;
};