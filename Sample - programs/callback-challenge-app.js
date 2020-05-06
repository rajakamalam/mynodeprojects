//Tip: Need not use require request because it is being used in the function
//Includng the geo code function also here for using in further callback chaining processes
const forecast = require('./forecast-Function')
const geoCode = require('./geoCode-function-app')

geoCode('Bombay', (error, valueFromgeoCode) => {
    console.log('Error:', error)
    console.log('Data:', valueFromgeoCode)
})

forecast(13.0827, 80.2707, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})