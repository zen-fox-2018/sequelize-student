'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: {
      type: DataTypes.STRING,
      validate : {
        isIn :{
          args : [['male', 'female']],
          msg : 'harus male atau female'
        }
      }
    },
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate : {
        isEmail: {
          args : true,
          msg : 'email not valid'
        },
        isUnique : function(email){
          return Student.findOne({
            where : {
              email : email
            }
          })
          .then((data)=>{
            if (data.dataValues.email == email)
            throw new Error('email already registered');
          })
          .catch(err =>{
            // console.log(err);
            throw err
          })
        }
      }
    },
    phone: {
      type :DataTypes.STRING,
      validate : {
        len : {
          args : [[10,13]],
          msg : 'Validation error: Phone length must be 10 -13 digits'
        },
        isNumeric : {
          args : true,
          msg : 'Validation error: Phone could not contain letters'
        }
        isAlphanumeric : {
          args : false,
          msg : 'Validation error: Phone could not contain non-Alphanumeric'
        }
      }
    },
    Height: {
      type : DataTypes.INTEGER,
      validate : {
        min : {
          args: 150,
          msg : 'tinggi minimal adalah 150'
        },
        notNull : true
      }
    }
  });

  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function(data) {
    // console.log('this is getFullName');
    return this.first_name+' '+this.last_name;
  };

  Student.prototype.getAge = function(data) {
    // console.log('getAge');
    var todayDate = new Date();
    var todayYear = todayDate.getFullYear();
    return todayYear-this.birthday.getFullYear();
  };

  Student.getFemaleStudents = function(){
    return new Promise(function(resolve, reject) {
      Student.findAll({
        where : { gender : 'female'}
      })
      .then(data =>{
        resolve(data);
      })
      .reject(err =>{
        resolve(err);
      })
    });
  }
  return Student;
};
