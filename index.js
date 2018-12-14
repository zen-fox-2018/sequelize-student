const Controller = require('./controllers/Controller.js')

let obj = {
  id: 11,
  first_name: 'Mr',
  last_name: 'Bob',
  gender: 'male',
  birthday: '1996-04-28',
  email: 'patrick@star3.biz',
  phone: '01234567899',
  height: 150,
  // createdAt: new Date,
  // updatedAt: new Date
}

Controller.update(obj, 11)

// Controller.create(obj)

// Controller.findAll()

// Controller.getFemaleStudents()

