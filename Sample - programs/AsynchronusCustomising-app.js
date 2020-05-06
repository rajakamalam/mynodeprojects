const request = require('request')

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Chennai.json?access_token=pk.eyJ1IjoicmFqYWthbWFsYW0iLCJhIjoiY2s5ZTdwaDNhMDJoazNsb2JtZ3prZzVyaCJ9.7xDds5lX3ZVyCkI9URckKQ'

request({url: url, json: true}, (error, response) => {
    if(error) {
        console.log('Unable to connect to location services')
    }
    else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try an other location')
    }
    else {
        const latitude = response.body.features[0].center[0]
        const longitute = response.body.features[0].center[1]
        console.log(latitude, longitute)
    }
}) 