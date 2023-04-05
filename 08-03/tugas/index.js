// const ambilData = require('./data.json')
const fs = require('fs')

// console.log(ambilData.id)
const ambilJSON = fs.readFileSync('./data.json', 'utf-8');
const convertJSON = JSON.parse(ambilJSON);
// console.log(convertJSON.id)

const hasKey = (convertJSON, keyName) => {
    if (convertJSON.hasOwnProperty(keyName) == true ) {
        return convertJSON[keyName]
    } else {
        return 'Gak nemu'
    }
}

console.log(hasKey(convertJSON, 'id'));


