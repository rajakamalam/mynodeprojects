//Web servers - Part 2
//The below section contains:
//1. Advanced templating

const path = require('path')
const express = require('express')
const hbs = require('hbs')

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

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Created by -Rajakamalam'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page',
        name: 'Created by -Rajakamalam'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        text: 'This help page is created in order to help ansswer any questions you have regarding the weather API',
        name: 'Created by -Rajakamalam'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Chennai TN, India',
        weather: 'The weather outside is 35 degress. It feels like 40.'
    })
})

//app.listen is the method responsible for bringing the server up
//Note: This will only be used once in a file
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})