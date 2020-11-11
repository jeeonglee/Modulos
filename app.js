// fs é nativo do node
const fs = require('fs')
let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8')


// format é uma propriedade do moment
const moment = require("moment")
let data = moment().format("MMM do YY")

//puxar do módulo que eu criei
const herois = require("./superHerois")


console.log(herois)