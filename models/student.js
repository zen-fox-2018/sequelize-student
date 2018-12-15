'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique : true,
      validate: {
        isEmail : function(value) {
          let et = value.indexOf('@')
          let titik = value.indexOf('.')
          if(et && titik) {
            if (!(et > 1 && titik - et > 1 && titik < value.length - 2) ) {
              throw 'Your email input is wrong'
            }
          } else {
            throw 'Your email input is wrong!'
          }
        },
        
        isUnique : function(value) {
          return Student.findOne( { where: { email : value }})
            .then( data => {
              if (this.id !== data.id) {
                  throw 'your email is already used'
              }
            })
            .catch( err => {
              throw err
            })
        }
      }
    },
    phone : {
      type : DataTypes.STRING,
      validate: {
                  isAlphanumeric: {
                    msg : `Your input is wrong`
                  },
                  isNumeric: {
                    msg : `Your input phone is wrong`
                  },
                  len : {
                    args: [10,13],
                    msg: `Your input phone is wrong`
                  }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: "height must be above 150cm"
        }
      }
    },
  }, {});


  Student.associate = function(models) {
    // associations can be defined here
    Student.getFemaleStudents = function() {
      return new Promise( (resolve, reject) => {
        Student.findAll( { where: { gender: "Female"}})
        .then( data => {
          let output = data.map( a => a.dataValues) 
          resolve(output)
        })
        .catch( err => {
          reject(err)
        })
      })
    }
  };

  Student.prototype.getFullName = function() {
    let obj = {
      first_name: this.first_name,
      last_name: this.last_name,
      gender: this.gender,
      birthday: this.birthday,
      email: this.email,
      phone: this.phone,
      createdAt: this.createdAt,
      updatedAt : this.updatedAt,
      heigth: this.height,
      fullname : `${this.first_name} ${this.last_name}`
    }

    return obj
  }

  Student.prototype.getAge = function() {
    let obj = {
      first_name: this.first_name,
      last_name: this.last_name,
      gender: this.gender,
      birthday: this.birthday,
      email: this.email,
      phone: this.phone,
      createdAt: this.createdAt,
      updatedAt : this.updatedAt,
      heigth: this.height,
      age : new Date().getFullYear() - new Date(this.birthday).getFullYear()
    }
    return obj
  }

  return Student;
};
