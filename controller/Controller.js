const Model = require ('../models')


class Controller {
    
    static getAllFullName() {
        Model.Student.findAll()
        .then(data => {
            console.log('User Full name :');
            
            data.forEach(isiData => {
                
                console.log( isiData.getFullName());
            });
        })
    }

    static getAllAge() {
        Model.Student.findAll()
        .then(data=> {
            console.log('Current Age user ');
            data.forEach(isiData => {
                console.log(isiData.getAge());
            })
        })
    }

    static getFemaleStudent() {
        Model.Student.getFemaleStudents()
        .then(data => {
            data.forEach(dataFemale=> {
                console.log(dataFemale);
            })
        })
        .catch(err => {
            console.log(err);
            
        })
    }

    static createStudent(first_name, last_name, gender, birthday, email, phone, tinggiBadan) {
        Model.Student.create({
            first_name:first_name,
            last_name:last_name,
            gender: gender,
            birthday:birthday,
            email:email,
            phone:phone,
            tinggiBadan:tinggiBadan
        })
        .then((data)=> {
            console.log(`Berhasl menambahkan data`);
        })
        .catch((err)=> {
            console.log(err);
        })
    }

    static updateStudentById(id, first_name, last_name, gender, birthday, email, phone, tinggiBadan) {

        let objStudent = {
            first_name:first_name,
            last_name:last_name,
            gender: gender,
            birthday:birthday,
            email:email,
            phone:phone,
            tinggiBadan:tinggiBadan
        }
        Model.Student.find({where :{email: objStudent.email} })
        .then(data => {
            if(data.email == objStudent.email) {
                delete objStudent.email
            }
            return Model.Student.update(objStudent, {
                where : {id : id}
            })
        })
        .then(()=> {
            console.log(`Berhasil Update`);
            
        })
        .catch(err => {
            console.log(err);  
        })
        
    }
}

module.exports = Controller