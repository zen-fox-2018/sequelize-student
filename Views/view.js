
class Views {

    static showFemaleStudent(female) {
        female.forEach(element => {
            console.log(element.dataValues)  
        })
    }

    static showAddedStudent(data) {
        data.forEach((element) => {
            console.log(element.dataValues)
        })
    }

    static showError(errorData) {
        console.log(errorData)
    }
}

module.exports = Views