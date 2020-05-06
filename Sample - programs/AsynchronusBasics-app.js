const request = require('request')

//const url = 'http://api.weatherstack.com/current?access_key=5265dff6655a718c5af292243f63345a&query=13.0827,-80.2707'

//Considering units af F
const url = 'http://api.weatherstack.com/current?access_key=5265dff6655a718c5af292243f63345a&query=13.0827,-80.2707$units=f'

//request function takes 2 arguments:
//--1. Options object: Defines what we want to do. (That is where URL is provided)
//2. Function that has to be run

//-- Type - 1 
// request({url: url }, (error, response) => {
//     //console.log(response)
//     //The response will have a body property that is essentially what has to be parsed
//     const data = JSON.parse(response.body)
//     console.log(data.current)
// })

//--Type - 2 (More parameters can be added - checkon node JS website)
//-- Note: json has to be full small. By setting it true we are telling the compiler that the data will
//be considered as JSON. This means the parse command need not be used
// request({url: url, json: true }, (error, response) => {
//     console.log(response.body.current)
// })

//--Challenge: To type out -- "It is currently X degrees out. It feels like X1 degrees out"
request({url: url, json: true}, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' out.')
})

