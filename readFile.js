const fs = require('fs');
class readData {
  static readFile(file) {
    return new Promise((resolve, reject) => {
      fs.readFile(file, 'utf8', (err, dataString) => {
        if (err) {
          reject(err)
        } else {
          resolve(dataString);
        }
      })
    })
  }

  static readData(file) {
    return new Promise((resolve, reject) => {
      readData.readFile(file)
        .then((dataString) => {
          let rawData = dataString.split('\n');
          rawData = rawData.map( data => data.split(','));
          resolve(rawData);
        })

        .catch((err) => {
          reject(err);
        })
    })
  }
}
// readData.readData('./students.csv')
// .then((rawData) => {
//   let tampung = [];
//   rawData.forEach(student => {
//     let newStudent = {
//       first_name : student[0],
//       last_name : student[1],
//       gender : student[2],
//       birthday : student[3]
//     }
//     tampung.push(newStudent);
//   })
//   console.log(tampung);
// })
module.exports = readData;
