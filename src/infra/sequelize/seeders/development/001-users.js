const Faker = require('../../../support/fakers')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('skUser', Faker('users'), {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('skUser', null, {})
  }
}
