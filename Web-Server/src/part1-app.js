//Web servers - Part 1
//The below section contains:
//1. Loading static pages.
//2. Loading pages with dynamic content using hbs (Also called view)


const path = require('path')
const express = require('express')
//app.com
//app.com/help
//app.com/about
//app.com/weather

const app = express()
//Node js has a wrapper function which allows s to access the path using a few mwthods
//Eg: console.log(__dirname)
//Eg: 2 we will use the path join method to identify absolute path

//app.use is used to include any file that you have created otherwise
//Note: app.use is explained later
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath)) //Setting up static directory to serve
//The above sentence will help me access all the files from the public folder

//---------------------
//If the user wants to use any other path other than the views directory, then we have to change 
//the path manually
const customDirectoryPath = path.join(__dirname, '../templates/views')
app.set('views', customDirectoryPath)
//----------------------

//app.set is used to set the hbs module. 
//Note 1: The strings present inside should be exactly the same as below
//Note 2: There has t be a seperate folder called "view" that will be present at the root of 
//        the current directory
//Note 3: VS code has built in support for handlebar
app.set('view engine', 'hbs')

//Since index is a hbs, we need to use get calls now
//Render essentially allows us to create and render dynamic texts
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

//When someone visits a particular site, then what to do is written insid the arrow function =?> {}
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