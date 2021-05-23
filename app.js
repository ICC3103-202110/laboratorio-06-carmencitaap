const {title, input} = require('./view')
const {table} = require('./view')
const {printTable} = require('console-table-printer')

model = {
    leftValue: 0,
    leftUnit: "Celsius",
    rightValue: 32,
    rightUnit: "Farenheit",
    input1: '',
    input2: 0,
    input3: 0,
    input4: 0
}


console.log(title())
printTable(table(model))
const {input1,input2,input3,input4} = input(model)
