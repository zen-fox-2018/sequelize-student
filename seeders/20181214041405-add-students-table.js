'use strict';
const readData = require('../readFile');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return new Promise((resolve, reject) => {
      readData.readData('./students.csv')
      .then((rawData) => {
        let tampung = [];
        rawData.forEach(student => {
          let newStudent = {
            first_name : student[0],
            last_name : student[1],
            gender : student[2],
            birthday : student[3],
            createdAt : new Date(),
            updatedAt : new Date()
          }
          tampung.push(newStudent);
        })
        resolve(queryInterface.bulkInsert('Students', tampung, {}));
      })

      .catch((err) => {
        reject(err);
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
