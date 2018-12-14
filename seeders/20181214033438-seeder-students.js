'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Students', [{
      "first_name": "Toddy",
      "last_name": "Camelia",
      "gender": "Male",
      "birthday": "7/7/1999",
      "email": "tcamelia0@walmart.com",
      "phone": "5706332092",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "first_name": "Mariejeanne",
      "last_name": "Andersen",
      "gender": "Female",
      "birthday": "9/21/1999",
      "email": "mandersen1@shutterfly.com",
      "phone": "1796597131",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "first_name": "Vivian",
      "last_name": "Sopp",
      "gender": "Female",
      "birthday": "9/1/2010",
      "email": "vsopp2@google.com.hk",
      "phone": "9147421518",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "first_name": "Britta",
      "last_name": "Goering",
      "gender": "Female",
      "birthday": "5/17/2001",
      "email": "bgoering3@blinklist.com",
      "phone": "6701595894",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "first_name": "Tymothy",
      "last_name": "Kingsford",
      "gender": "Male",
      "birthday": "1/5/1997",
      "email": "tkingsford4@fc2.com",
      "phone": "2061949927",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "first_name": "Denys",
      "last_name": "Rizzelli",
      "gender": "Male",
      "birthday": "7/10/2007",
      "email": "drizzelli5@europa.eu",
      "phone": "7044360187",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "first_name": "Evin",
      "last_name": "Brazil",
      "gender": "Male",
      "birthday": "5/31/2006",
      "email": "ebrazil6@dropbox.com",
      "phone": "5962970501",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "first_name": "Cynthie",
      "last_name": "McKeowon",
      "gender": "Female",
      "birthday": "2/17/2003",
      "email": "cmckeowon7@jalbum.net",
      "phone": "5007282484",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "first_name": "Gustav",
      "last_name": "Cordes",
      "gender": "Male",
      "birthday": "11/17/2010",
      "email": "gcordes8@mashable.com",
      "phone": "9933905072",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "first_name": "Irv",
      "last_name": "Zincke",
      "gender": "Male",
      "birthday": "12/24/2014",
      "email": "izincke9@si.edu",
      "phone": "8314122868",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "first_name": "Rutherford",
      "last_name": "McMennum",
      "gender": "Male",
      "birthday": "12/15/1997",
      "email": "rmcmennuma@deviantart.com",
      "phone": "7822140643",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "first_name": "Ilysa",
      "last_name": "McCullagh",
      "gender": "Female",
      "birthday": "9/23/2005",
      "email": "imccullaghb@dagondesign.com",
      "phone": "9153284994",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "first_name": "Holly",
      "last_name": "Glackin",
      "gender": "Female",
      "birthday": "11/25/2000",
      "email": "hglackinc@elegantthemes.com",
      "phone": "7416429228",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "first_name": "Ava",
      "last_name": "McGoldrick",
      "gender": "Female",
      "birthday": "10/19/2016",
      "email": "amcgoldrickd@istockphoto.com",
      "phone": "4828596455",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "first_name": "Corine",
      "last_name": "McGrirl",
      "gender": "Female",
      "birthday": "5/15/2009",
      "email": "cmcgrirle@dagondesign.com",
      "phone": "2929282431",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Students', null, {});
  }
};
