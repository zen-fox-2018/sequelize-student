const argv = process.argv.slice(2)
const StudentController = require('./controllers/StudentController') 

StudentController.execute(argv)