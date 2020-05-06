//Call back chaining is essentially calling a callback within a callback
//This will enable us to use the results of one call back on the other etc.

const forecast = require('./forecast-Function')
const geoCode = require('./geoCode-function-app')

const location_input = process.argv[2];

if (location_input.length === 0) {
    return console.log('Please enter the location name along with node command')
}
geoCode(location_input, (error, valueFromgeoCode) => {
    //If error occurs in geocode it should not progress. To acheive the same, we do the following
    if (error) {
        return console.log(error)
    }
    //console.log('Error:', error)
    //console.log('Data:', valueFromgeoCode)
    forecast(valueFromgeoCode.latitude, valueFromgeoCode.longitude, (error, data) => {
        if (error) {
            return console.log(error)
        }
        console.log(valueFromgeoCode.location)
        console.log(data)
        //console.log('Error', error)
        //console.log('Data', data)
    })
})