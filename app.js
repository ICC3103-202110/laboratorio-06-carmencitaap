const {title} = require('./view')
const {table} = require('./view')
const {printTable} = require('console-table-printer')

model = {
    leftValue: 0,
    leftUnit: "Celsius",
    rightValue: 32,
    rightUnit: "Farenheit",
    input1: 0,
    input2: 0,
    input3: 0,
    input4: 0
}


console.log(title())
printTable(table(model))