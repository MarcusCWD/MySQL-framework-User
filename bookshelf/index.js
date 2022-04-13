// Setting up the database connection
const knex = require('knex')({
    client: 'mysql',
    connection: {
      user: 'marcus',
      password:'password',
      database:'poster'
    }
  })
  const bookshelf = require('bookshelf')(knex)
  
  module.exports = bookshelf;