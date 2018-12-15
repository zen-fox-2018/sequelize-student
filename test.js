const Model = require('./models')

// Model.Student.findAll()
//   .then( data => {
//     if (data) {
//       let output = data.map( a => a.getFullName()) 
//       // console.log(data)
//       console.log(output)
//     }
//   })
//   .catch( err => {
//     throw err
//   })

  Model.Student.findAll()
  .then( data => {
    if (data) {
      let output = data.map( a => a.getAge()) 
      // console.log(data)
      console.log(output)
    }
  })
  .catch( err => {
    throw err
  })

  // Model.Student.findAll( { where: { gender: "Female"}})
  // .then( data => {
  //   if (data) {
  //     let output = data.map( a => a.dataValues) 
  //     // console.log(data)
  //     console.log(output)
  //   }
  // })
  // .catch( err => {
  //   throw err
  // })

  // Model.Student.getFemaleStudents()
  //   .then( data => {
  //     console.log(data)
  //   })
  //   .catch( err => {
  //     throw err
  //   })
  
  // Model.Student.create(
  //   {
  //     "first_name": "Corine",
  //     "last_name": "McGrirl",
  //     "gender": "Female",
  //     "birthday": "5/15/2009",
  //     "email": "cmcgrirle@dagondesign.com",
  //     "phone": "2929282431",
  //     "createdAt": new Date(),
  //     "updatedAt": new Date(),
  //     "height": 165
  //   }
  // )
  // .then( data => {
  //   console.log('===',data)
  // })
  // .catch( err => {
  //   console.log(err)
  //   console.log(err.name)
  //   console.log('////',err.errors[0].message)
  // })
