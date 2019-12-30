require('dotenv').config()
const path = require('path')
const withPlugins = require('next-compose-plugins')

// Next Config
const nextConfig = {
  experimental: { publicDirectory: true },
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
  },
  webpack(config, options) {
    config.resolve.alias['~'] = path.join(__dirname, '')
    return config
  },
}

// SASS
const withSass = require('@zeit/next-sass')
const withSassConfig = {
  sassLoaderOptions: {
    includePaths: ['./', 'absolute/path/b'],
  },
}

// Export all config
module.exports = withPlugins([[withSass, withSassConfig]], nextConfig)
