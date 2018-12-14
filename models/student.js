'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING
      , 
      validate: {
        isUnique: function(value){
          return Student.findOne({where:{
            email:value
          }})
            .then(data => {
              if(data){
                if(data.dataValues.id != this.id) {
                  throw new Error(`Email has been used`)
                }
              }
            })
            .catch(err =>{
              throw new Error(err)
            })
        },
        isEmail: true
        }
      },
    phone: {
      type: DataTypes.STRING
      ,
      validate: {
        len: {
          args: [10, 13],
          msg: `Phone length must be 10 -13`
        },
        isAlphanumeric: {
          args: true,
          msg: `Phone could not contain non-alphanumeric`
        },
        isNumeric: {
          args: true,
          msg: `Phone could not contain letter`
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
  

  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function() {
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function() {
    return `${new Date().getFullYear() - this.birthday.getFullYear()}`
  }

  Student.getFemaleStudents = function() {
    return new Promise ((res ,rej ) => {
      Student.findAll({where: {gender: 'female'}})
        .then(data => {
          if(!data) {
            res(`There are no female student`)
          } else {
            data.forEach(stud => {
              stud.dataValues.fullName = stud.getFullName()
            });
            res(data)
          }
        })
        .catch(err => {
          rej(err)
        })
    })
  }

  return Student;
};