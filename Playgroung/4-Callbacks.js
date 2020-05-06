//Asynchronus example with st time
setTimeout(() => {
    console.log('Two seconds!')
}, 2000)

//Synchronus - for understanding purposes
const names = ['Moni', 'Sasi', 'Prach']
const shortNames = names.filter((name) => {
    return name.length <= 4
})
//console.log(shortNames)

//FYIs:
//Whenever a callback function is writtten, it is called from inside a function.
//The callback function need not necessarily have a name
//Syntax: funcName(parameter1, 2, .., () => { function code is written here})
//To call the callback function, syntax: callback(para1)
const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude : 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
    //return data
}

const data = geoCode('Chennai', (valueFromgeoCode)=> {
    console.log(valueFromgeoCode)
})
//console.log(data)