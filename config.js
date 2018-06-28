module.exports = {
  port: process.env.PORT || 8080,
  db: process.env.MONGODB_URI || 'mongodb://userL4A:32O3BkvUsPCGA10n@mongodb/clients',
  SECRET_TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
}
