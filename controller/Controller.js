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
}

module.exports = Controller