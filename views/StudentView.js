class View {
    static showFemaleStudents(file) {
        console.log(`=========`, file);
    }

    static errorOperation(err) {
        console.log(`ERROR!!: ${err}`);
    }

    static deleteSucceed(id) {
        console.log(`Data that has an id ${id} has deleted`);
    }

    static createDataSucceed(data) {
        console.log(`Create Data Succeed!`);
        console.log(data);
    }

    static findAll(data) {
        console.log(`Here's all the data: `);
        console.log(data);
    }

    static showFullName(name) {
        console.log(name);
    }

    static showAges(age) {
        console.log(age)
    }
}

module.exports = View