//Geo-code function created for re-using in multiple places

const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmFqYWthbWFsYW0iLCJhIjoiY2s5ZTdwaDNhMDJoazNsb2JtZ3prZzVyaCJ9.7xDds5lX3ZVyCkI9URckKQ'

    request({
        url: url,
        json: true
    }, (error, response) => {
        //To enable the geoCode function to do more than just print error. We are using the callback function
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try an other location', undefined)
        } else {
            callback(undefined, {
                location: response.body.features[0].place_name,
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0]
            })
            //console.log(latitude, longitute, placeName)
        }
    })
}

module.exports = geoCode