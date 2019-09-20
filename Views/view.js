
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

    static showUpdated(data) {
        console.log(data)
    }
}

module.exports = Views