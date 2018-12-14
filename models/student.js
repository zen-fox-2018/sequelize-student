'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Student.associate = function (models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function () {
    let obj = {
      first_name: this.first_name,
      last_name: this.last_name,
      gender: this.gender,
      birthday: this.birthday,
      email: this.email,
      phone: this.phone,
      full_name: `${this.first_name} ${this.last_name}`
    }
    return obj

  }

  Student.prototype.getAge = function () {
    let obj = {
      first_name: this.first_name,
      last_name: this.last_name,
      gender: this.gender,
      birthday: this.birthday,
      email: this.email,
      phone: this.phone,
      age: (new Date().getFullYear()) - Number(new Date(this.birthday).getFullYear())
    }
    return obj
  }

  Student.getFemaleStudent = function (data) {
    if (data.gender == `Female`) {
      let obj = {
        first_name: data.first_name,
        last_name: data.last_name,
        gender: data.gender,
        birthday: data.birthday,
        email: data.email,
        phone: data.phone,
        age: (new Date().getFullYear()) - Number(new Date(data.birthday).getFullYear()),
        full_name: `${data.first_name} ${data.last_name}`
      }
      return obj
    }
  }
  return Student;
};