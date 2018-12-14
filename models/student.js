'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
             type : DataTypes.STRING,
              validate:  { checkUnique : function (value) {
                        return Student.findOne( { where: {email:value}})
                          .then ((data) => {
                            if(data) {
                            throw new Error ("email has been used")
                            }
                          })
                          .catch((err)=>{
                            throw new Error(err)
                          })
                        
                      },
                        isEmail: {
                                    args: true,
                                    msg: "invalid email"
                        },
                        contains: {
                                    args: [".","@"],
                                    msg: "invalid format"
                        }
                        
              }
            },
    phone: { type:DataTypes.STRING,
              validate: {
                        len: {
                          args: [10,13],
                          msg: "min length 10"
                        }
              }
            }
  }, {});
  
  Student.prototype.fullName = function () {
      return `${this.first_name} ${this.last_name}`
    }
  
  Student.getFemale = function() {
      return new Promise((resolve,reject)=> {
        Student.findAll(
          {
            where: {gender: 'female'}
          }
        )
          .then (allData => {
            resolve(allData)
          })
          .catch (err => {
            reject(err)
          })
        
      })
  }
   
  return Student;
};