const fs = require('fs');

//Step 1: Read the data that is already present in the file
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString(); //to enable parsing
//console.log(dataJSON);
const data = JSON.parse(dataJSON);
//console.log(data);

data.name = 'Rajakamalam';
data.age = '26';
//console.log(data);

const alteredDataJSON = JSON.stringify(data);
//console.log(alteredDataJSON);
fs.writeFileSync('1-json.json', alteredDataJSON);