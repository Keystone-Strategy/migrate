'use strict'

const fs = require('fs')
const mongoose = require('mongoose')
const Migration = require('./migration.model')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

// determinate default value
const serverMigrationPath = () => process.env.SERVER_MIGRATION_PATH || `${__dirname}/migrations`

const createMigrationsDirectory = () => {
  if (!fs.existsSync(serverMigrationPath())) {
    fs.mkdirSync(serverMigrationPath())
  }
}

module.exports = {
  serverMigrationPath,
  createMigrationsDirectory,
  Migration
}
