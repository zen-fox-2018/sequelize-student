const Model = require("../models")
const View = require("../view/view.js")

class StudentController{
    static add(values){
        let objStudent = {
            first_name : values[0],
            last_name : values[1],
            gender : values[2],
            birthday : values[3],
            email : values[4],
            phone : values[5]
            
        }
        Model.Student.create(objStudent)
        .then(data =>{
            View.display(data.dataValues)
            process.exit()
        })
        .catch(err =>{
            View.error(err)
        })
    }

    static getFullName(){
        Model.Student.findAll()
        .then(allData =>{
            allData.forEach(element => {
                View.display(element.getFullName())
            });
            process.exit()
        })
        .catch(err =>{
            View.error(err)
        })
    }

    static getAge(){
        Model.Student.findAll()
        .then(allData =>{
            allData.forEach(element => {
                View.display(element.getAge())
            });
            process.exit()
        })
        .catch(err =>{
            View.error(err)
        })
    }

    static getFemale(){
        Model.Student.findAll()
        .then(allData =>{
            allData.forEach(element => {
                View.display(Model.Student.getFemale(element.dataValues))
            })
            process.exit()
        })
        .catch(err =>{
            View.error(err)
        })
    }

}

module.exports = StudentController