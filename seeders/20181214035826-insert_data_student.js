'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Students', [
     {
       first_name: 'Nikolas',
       last_name: 'Friesen',
       gender: 'female',
       bitrhday: '1998-12-24',
       email: 'nikolas@mail.com',
       phone: '449.497.7415',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      first_name: 'Randi',
      last_name: 'Halvorson',
      gender: 'male',
      bitrhday: '1997-01-29',
      email: 'randi@mail.com',
      phone: '(697)436-2633,',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Sally',
      last_name: 'Buckridge',
      gender: 'female',
      bitrhday: '1997-10-30',
      email: 'sally@mail.com',
      phone: '1-351-672-635,8',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Morris',
      last_name: 'Swift',
      gender: 'male',
      bitrhday: '1995-06-27',
      email: 'morris@mail.com',
      phone: '(600)142-5639,',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Sidney',
      last_name: 'Ortis',
      gender: 'male',
      bitrhday: '1997-04-04',
      email: 'sidney@mail.com',
      phone: '554.170.3265',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Reid',
      last_name: 'Skiles',
      gender: 'male',
      bitrhday: '1994-10-13',
      email: 'reid@mail.com',
      phone: '543-511-2123',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Violet',
      last_name: 'Dickens',
      gender: 'female',
      bitrhday: 'violet@mail.com',
      email: '1994-11-19',
      phone: '1-410-468-141,1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Marguerite',
      last_name: 'Flatley',
      gender: 'female',
      bitrhday: '1995-05-28',
      email: 'marguerite@mail.com',
      phone: '572.978.5828',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Cary',
      last_name: 'Schoen',
      gender: 'male',
      bitrhday: '1996-07-31',
      email: 'cary@mail.com',
      phone: '1-828-134-782,8',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Mazie',
      last_name: 'Gibson',
      gender: 'female',
      bitrhday: '1995-09-23',
      email: 'mazie@mail.com',
      phone: '144.038.7351',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Students', null, {});
  }
};
