const {title} = require('./view')
const {table} = require('./view')
const {input} = require('./view')
const {printTable} = require('console-table-printer')
const { celsiusToFahrenheit, fahrenheitToCelsius, kelvinToFahrenheit, celsiusToKelvin, kelvinToCelsius } = require('./update')

model = {
    leftValue: 0,
    leftUnit: "Celsius",
    rightValue: 32,
    rightUnit: "Fahrenheit",
    input1: '',
    input2: 0,
    input3: 0,
    input4: 0
}

async function app(title,table){
    console.log(title())
    printTable(table(model))
    const {/*input1,*/input2,input3,input4} = await input(model)
    
    if (input3 === "Celsius" && input4 === "Fahrenheit"){
        const newModel = celsiusToFahrenheit(input2,input3,input4,model)
        console.log(title())
        printTable(table(newModel))
    }
    else if (input3 === "Fahrenheit" && input4 === "Celsius") {
        const newModel = fahrenheitToCelsius(input2,input3,input4,model)
        console.log(title())
        printTable(table(newModel))
    }
    else if (input3 === "Fahrenheit" && input4 === "Kelvin"){
        const newModel = fahrenheitToKelvin(input2,input3,input4,model)
        console.log(title())
        printTable(table(newModel))
    }
    else if (input3 === "Kelvin" && input4 === "Fahrenheit"){
        const newModel = kelvinToFahrenheit(input2,input3,input4,model)
        console.log(title())
        printTable(table(newModel))
    }
    else if (input3 === "Celsius" && input4 === "Kelvin"){
        const newModel = celsiusToKelvin(input2,input3,input4,model)
        console.log(title())
        printTable(table(newModel))
    }
    else if (input3 === "Kelvin" && input4 === "Celsius"){
        const newModel = kelvinToCelsius(input2,input3,input4,model)
        console.log(title())
        printTable(table(newModel))
    }
}

console.log(app(title,table))