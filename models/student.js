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
        isUnique : function(value, next){
          let self = this
          Student.find({where : {email:value}})
          .then((user)=>{
            if(user && self.id !== user.id){
              return next(`email already in use`)
            }
            return next()
          })
          .catch(err=>{
            return next(err)
          })
        }
      }
    }
    ,
    phone: {
      type :DataTypes.STRING,
      validate : {
        len : [10,13],
        not: ["[a-z]",'i']
      }
    },
    height: {
      type : DataTypes.INTEGER,
      validate : {
        min : 150
      }
    }
  }, {});

  //instance method 
  Student.prototype.getFullName = function () {
    return `${this.first_name} ${this.last_name}`
  }
  Student.prototype.getAge = function () {
    let birthdayYearz = this.birthday.split('-')
    let birthdayYear = Number(birthdayYearz[0])
    let currentYear = Number((new Date()).getFullYear())
    return currentYear - birthdayYear

  }

  // class method
  Student.getFemaleStudents = function () {
    return new Promise((resolve, reject) => {
      Student.findAll(
        {
          where: { gender: 'female' }
        }
      )
        .then(users => {

          let femaleName = ''
          users.forEach(user => {
            femaleName += user.getFullName()
            femaleName += '\n'
          })
          resolve(femaleName)
            ;
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  Student.associate = function (models) {
    // associations can be defined here
  };
  return Student;
};

