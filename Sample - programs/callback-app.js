//This requires file from geoCode function
const request = require('request')
const geoCode = require('./geoCode-function-app')

geoCode('Bombay', (error, valueFromgeoCode) => {
    console.log('Error:', error)
    console.log('Data:', valueFromgeoCode)
})