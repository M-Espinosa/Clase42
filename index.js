const coolImages = require('cool-images');
const moment = require('moment');
const fs = require('fs');
// coolImages.one(); // 'https://unsplash.it/300/500?image=125'

let arrayUrlImages = coolImages.many();
console.log(arrayUrlImages)

arrayUrlImages.forEach(element => {
    console.log(element)
});


//log.txt
fs.readFile('log.txt', 'utf-8', (err, data) => {
    console.log(data);
})
fs.appendFile('log.txt', fechaHora + '\n' + arrayUrlImages + '\n', (error) => {
    if (error) throw Error;
    console.log('exito')
})


//moment
//fecha y hora
let fechaHora = moment().format('YYYY/MM/DD HH:mm:ss')
console.log(fechaHora)