'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail: true,
        isUnique: function(value, next) {
          Student.find({
            where:{email: value} 
          })
         .then(data=> {
           
           if(data) throw next(`Email sudah pernah dipakai`)
           next()
         })
         .catch(err => {
           next(err)
         })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate:{
        len:{
          args :[10,13],
          msg: "Validation Error : Phone length must be 10-13"
        }, 
        isAlphanumeric : {
          args:true,
          msg: "Validation Error : Phone could not contain non-alphanumeric"
        },
        isNumeric : {
          args:true,
          msg: "Validation Error : Phone could not contain letters"
        }
      }
    },
    tinggiBadan: {
      type: DataTypes.INTEGER,
      validate: {min:151}
    }
  }, {});

  //instance method getFullname
  Student.prototype.getFullName = function () {
    return this.first_name + ' ' + this.last_name
  }

  Student.prototype.getAge = function () {
    let newDate = new Date()
    return newDate.getFullYear() - (+this.birthday.split('-')[0])
  }
    
  Student.getFemaleStudents = function () {
    return new Promise((resolve,reject)=> {
      Student.findAll({
        where: {
          gender:'female'
        }
      })
      .then(data=> {
        let result = []
        data.forEach(dataStudent => {
          result.push(dataStudent.getFullName())
        })
        resolve(result)
      })
      .catch(err => {
        reject(err)
      })
    })
  }

  Student.associate = function(models) {
    // associations can be defined here

  };
  return Student;
};