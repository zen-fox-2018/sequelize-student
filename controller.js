const View = require('./view.js')
const Model = require('./models');

class Controller {
  static addStudent(first_name, last_name, gender, birthday, email, phone) {
    var obj = {
      first_name : first_name,
      last_name : last_name,
      gender : gender,
      birthday : birthday,
      email : email,
      phone : phone
      }
    Model.Student.create(obj)
    .then(data => {
      View.createSuccess(data.dataValues);
    })
    .catch(err =>{
      View.generalError(err);
    })
  }

  static update(param, value, id){
    var obj = {};
    obj[param] = value;
    obj['updatedAt'] = new Date();
    // console.log(obj);
    Model.Student.update(
      obj,
      { where : {  id : id  } }
    )
    .then(data => {
      View.updateSuccess(data.dataValues);;
    })
    .catch(err =>{
      View.generalError(err);
    })
  }

  static getFullName(){
    Model.Student.findAll()
    .then(data =>{
      data.forEach(item =>{
        // console.log(item);
        View.showFullName(item.getFullName(item))
        // console.log(item.getAge());
      })
    })
    .catch(err =>{
      View.generalError(err);
    })
  }

  static getAge(){
    Model.Student.findAll()
    .then(data =>{
      data.forEach(item =>{
        // console.log(item);
        View.showAge(item.getAge());
      })
    })
    .catch(err =>{
      View.generalError(err);
    })
  }

  static default(){
    View.default();
  }
}

module.exports = Controller;



// addStudent('Nikolas','Friesen','female','1998-12-24','agustina@wintheiser.info','449.887.7415',156)
// console.log(Model.Student.getAge())
// console.log(Model.Student);
