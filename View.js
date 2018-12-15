class view {
    static showErr(err) {
        console.log(err)
    }
    static addDataSucceed() {
        console.log("Data Successfully Addded")
    }
    static showNames(names) {
        console.log("Student Name: ")
        for (let i = 0; i <= names.length-1; i++) {
            console.log(names[i])
        }
    }
    static showAge(name, age) {
        console.log({name: name, age: age})
    }
    static getFemales(data) {
        console.log(data)
    }
}
module.exports = view