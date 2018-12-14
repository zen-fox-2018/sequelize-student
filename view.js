
class View {
    static successMessage(input) {
        console.log(`success add data ${input.first_name} ${input.last_name}`)
    }
    static errorMessage(input) {
        console.log(input)
    }
    static showAll(input) {
        input.forEach(element => {
            console.log(element.dataValues)
        });
        
    }
    static fullNames(input) {
        console.log(`full name = ${input}`)
    }
}

module.exports = View