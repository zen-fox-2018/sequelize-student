const Model = require('../models')
const View = require('../views/View.js')

class StudentController {
    static addStudent(firstname,lastname,gender,birthday, email, phone,height){
        let objStudent = {
            first_name : firstname,
            last_name : lastname,
            gender : gender,
            birthday : birthday,
            email : email,
            phone : phone,
            height : height
        }
        Model.Student.create(objStudent)
        .then((dataStudent)=>{
            View.showMsg(dataStudent.dataValues)
            process.exit()
        })
        .catch((err)=>{
            View.showError(err)
        })
    }

    static readStudent(){
        Model.Student.findAll()
        .then((allStudentData)=>{
            allStudentData.forEach(studentData => {
                View.showMsg(studentData.dataValues)
            });
            process.exit()
        })
        .catch(err=>{
            View.showError(err)
        })
    }

    static readStudentFullName(){
        Model.Student.findAll()
        .then((allStudentData)=>{
            allStudentData.forEach(singleStudent=>{                
                View.showMsg(`full name : ${singleStudent.getFullName()}`)
                View.showMsg(`umur : ${singleStudent.getAge()}`)                
            })
            process.exit()
            // let zz = allStudentData.map(dent=>{
            //     return dent.getFullName()
            // })
            // View.showMsg(zz) //tampilannya array
        })
        .catch(err=>{
            View.showError(err)
        })
    }

    static updateStudentData(namaKolom, valueKolom, id){
        let objStudent = {}
        objStudent[namaKolom] = valueKolom        
        Model.Student.update(objStudent, {
            where : {id : id}
        })
        .then(()=>{
            View.showMsg(`data with id ${id} is updated`)
            process.exit()
        })
        .catch((err)=>{
            View.showError(err)
        })
    }

    static showFemaleStudents(){
        Model.Student.getFemaleStudents()
        .then((data)=>{
            View.showMsg(data)
            process.exit()
        })
        .catch(err=>{
            View.showError(err)
        })

    }
}

module.exports = StudentController