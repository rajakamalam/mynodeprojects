//Web servers - Part 3
//The below section contains the information on how to pass value through user inputs
//Eg: 1. Passing in values via query string
//Query string: This means that data is passed in after the link. This starts with a question mark
//2. Fetching the current weather forecast for a given place via functions
//3. Learning about fetch function and using the JS file and fetching values in 
//console(Check filename: javscr.js)

const path = require('path')
const express = require('express')
const hbs = require('hbs')
//For fetching the current weather
const forecast = require('./utils/forecast-Function')
const geoCode = require('./utils/geoCode-Function')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))
const viewsPath = path.join(__dirname, '../templates/views')
app.use(express.static(viewsPath))
const partialPath = path.join(__dirname, '../templates/partial')
app.use(express.static(partialPath))

app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialPath)
//1.Home page(Index)
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Created by -Rajakamalam'
    })
})
//2. About page
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page',
        name: 'Created by -Rajakamalam'
    })
})
//3. Help page
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        text: 'This help page is created in order to help ansswer any questions you have regarding the weather API',
        name: 'Created by -Rajakamalam'
    })
})
//Since input has to be sent in by query via the URL, we need to write the following code
//Note: A http request can be sent only once and response can also be received only once
//4. Sample
app.get('/product', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)

    res.send({
        products: []
    })
})
//Challenge: Getting address
//4. Weather - Consisting the actual weather forecast
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Please provide address!'
        })
    }
    geoCode(req.query.address, (error, valueFromgeoCode) => {
        if (error) {
            return res.send({
                error: 'There was an error while fetching the co-ordinates. Please check if the address is valid and try again!'
            })
        }
        // res.send({
        //     address: req.query.address,
        //     Createdby: '-Rajakamalam'

        // })
        forecast(valueFromgeoCode.latitude, valueFromgeoCode.longitude, (error, data) => {
            if (error) {
                return res.send({
                    error: 'There was an error while fetching the weather. Please check if the address is valid and try again!'
                })
            }
            res.send({
                location: valueFromgeoCode.location,
                forecast: data,
                address: req.query.address,
                Createdby: '-Rajakamalam'
            })
        })

    })
})

app.get('/help/*', (req, res) => {
    res.render('404-error-page', {
        title: '404 - Error codes',
        message: 'Help article not found',
        name: 'Created by -Rajakamalam'
    })
})

app.get('*', (req, res) => {
    res.render('404-error-page', {
        title: '404 - Error codes',
        message: '404 - Page not found',
        name: 'Created by -Rajakamalam'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})