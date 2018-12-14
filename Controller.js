const Models =  require('./models')
const View =  require('./view')

class Controller {
    static create (obj){
        Models.Student.create(obj)
        .then(data => {
            View.successMessage(data.dataValues)
        })
        .catch(err => {
            View.errorMessage(err)
        })
    }
    static readAll (){
        Models.Student.findAll()
        .then(dataAll => {
            dataAll.forEach(data => {
                View.fullNames(data.fullName())
            });
           // View.showAll(dataAll)
        })
    }
    static readById() {

    }

    static delete(id) {

            Models.Student.destroy({
              where: {
                id: id
              }
            })
              .then(() => {
                View.successMessage(`Data with id ${id} success deleted`);
              })
              .catch(err => {
                Views.errorMessage(err);
              });
        
    }
    static update() {

    }
    static findFemale() {
        Models.Student.getFemale()
        .then (allData => {
            allData.forEach(data => {
                View.fullNames(data.fullName())
            });
        })
    }
}

module.exports = Controller