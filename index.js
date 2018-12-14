const Controller = require('./controllers/Controller.js')

let obj = {
  first_name: 'Sponge',
  last_name: 'Bob',
  gender: 'male',
  birthday: '1996-04-28',
  email: 'patrick@star3.biz',
  phone: '12345678901s0sdsds-',
  height: 150,
  createdAt: new Date,
  updatedAt: new Date
}

Controller.create(obj)

// Controller.findAll()

// Controller.getFemaleStudents()

