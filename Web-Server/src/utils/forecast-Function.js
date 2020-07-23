const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5265dff6655a718c5af292243f63345a&query=' + encodeURIComponent(latitude) + ',' + +encodeURIComponent(longitude)
    //console.log(url)

    request({
            url: url,
            json: true
        },
        (error, response) => {
            //console.log(response.body)
            if (error) {
                callback('Unable to connect to location services', undefined)
            } else if (response.body.location.lat === null) {
                callback('Unable to find location. Try an other location', undefined)
            } else {
                callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' out.')
            }
        })
}

module.exports = forecast