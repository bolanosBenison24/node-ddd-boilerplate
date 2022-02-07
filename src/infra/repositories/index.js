const User = require('./user')
const Company = require('./company')

module.exports = ({ database }) => {
  const userModel = database.models.skUser
  const companyModel = database.models.skCompany

  return {
    userRepository: User({ model: userModel }),
    companyRepository: Company({ model: companyModel })
  }
}
