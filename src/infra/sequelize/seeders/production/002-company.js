const Faker = require('../../../support/fakers')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('skCompany', Faker('companies'), {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('skCompany', null, {})
  }
}
