console.log("Client side JS is loaded")

//we have to get data from the form into our JavaScript file.
//In the project we are creating, this JS file is the controller file. 
//And this is a file where we will receive and wrap data for further use.
//JS used in controlers are called client side JS
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')
msg1.textContent = ' '
msg2.textContent = ' '

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    msg1.textContent = ' '
    msg2.textContent = ' '
    const location = search.value
    msg1.textContent = 'Loading..'
    //It is not necessary to give full path. Although, full path will work for local, it will not work
    //while we are deploying code to heroku
    //fetch('http://localhost:3000/weather?address=' + encodeURIComponent(location)).then((response) => {
    fetch('/weather?address=' + encodeURIComponent(location)).then((response) => {
        response.json().then((data) => {
            //console.log(data)
            if (data.error) {
                //console.log(data.error)
                msg1.textContent = data.error
            } else {
                //console.log(data.location)
                //console.log(data.forecast)
                msg1.textContent = data.location
                msg2.textContent = data.forecast
            }
        })
    })
    console.log(location)
})