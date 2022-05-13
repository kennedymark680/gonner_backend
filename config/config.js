require('dotenv').config()
module.exports = {
  development: {
    database: 'gonner',
    dialect: 'postgres'
  },
  test: {
    database: 'gonner',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
