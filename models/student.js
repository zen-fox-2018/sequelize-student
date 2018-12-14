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
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function(){
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function(){
    let age = new Date().getFullYear()-new Date(this.birthday).getFullYear()

    if(new Date().getMonth() < new Date(this.birthday).getMonth() && new Date().getDay() < new Date(this.birthday).getDay() ){
      age--
    }

    return `${age}`
  }

  Student.getFemale = function(student){
    if(student.gender == "female"){
      
      let objStudents = {
        first_name: student.first_name,
        last_name: student.last_name,
        fullName: `${student.first_name} ${student.last_name}`,
        gender: student.gender,
        birthday: student.birthday,
        email: student.email,
        phone: student.email
      }

      return objStudents
    }
  } 

  // Student.getFemale = function(){
  //   return new Promise((resolve, reject)=>{
  //     findAll({
  //       where: {
  //         gender:"female"
  //       }
  //     }).then(data =>{
          
          
  //     })
  //   })
  // };
  return Student;
};