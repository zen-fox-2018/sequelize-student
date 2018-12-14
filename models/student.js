'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: { type: DataTypes.STRING, 
             validate : {
              isUniqe(value) {
                return Student.findAll({
                  where : {email : value}
                })
                .then(function(data){
                  if(data.length !== 0) {
                    throw new Error ('Email is already in use!')
                  }
                })
                .catch(function(err) {
                  throw err
                })
              },
              validEmail (value) {
                let at = value.indexOf("@");
                let dot = value.indexOf('.')
                if(at == -1 || dot == -1 || at == 0 ||  dot-at < 2) {
                  throw new Error('example@mail.com')
                }
              }
             }},
    phone: {type : DataTypes.STRING, 
            validate : {
              len: [10,13]
            }},
    ['Tinggi Badan']: { type : DataTypes.INTEGER,
                        validate : {
                          min : 150
                        }}
  }, {});

  Student.prototype.getFullName = function () {
      let fullName = `${this.first_name} ${this.last_name}`
      return fullName
  }

  

  Student.prototype.getAge = function() {
    let thisyear = new Date().getFullYear()
    let birth = new Date(this.birthday).getFullYear()
    return thisyear - birth
  }

  Student.associate = function (models) {
    Student.getFemaleStudents = function (){
      return new Promise (function(resolve, reject) {
        Student.findAll(
          {where : {gender: 'female'}}
        )
        .then(function(data) {
          resolve(data)
        })
        .catch(function(err) {
          reject(err)
        })
      })
    }
};

 
  return Student;
};