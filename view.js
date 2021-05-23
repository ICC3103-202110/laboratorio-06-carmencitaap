const chalk = require('chalk')
const figlet = require('figlet')
const inquirer = require('inquirer')

function title() {
    return chalk.magenta(
        figlet.textSync(
            'Temperature Converter App',
            {
                horizontalLayout: 'full',
                font: 'Small'
            }
        )
    )
}

function table(model) {
    const{leftValue} = model
    const{leftUnit} = model
    const{rightValue} = model
    const{rightUnit} = model
    
    return [
        {leftValue: leftValue, leftUnit: leftUnit, rightValue: rightValue, rightUnit:rightUnit}
    ]
}

function input(model) {
    const {input1} = model
    const {input2} = model
    const {input3} = model
    const {input4} = model

    const message1 = "Left temperature is source? "
    const message2 = "Temperature value to convert? "
    const message3 = "From? "
    const message4 = "To?"

    const choices = ["Celsius", "Farenheit", "Kelvin"]

    return inquirer.prompt([
        {
            name: "input1",
            type: "input",
            message: message1,
            default: input1
        },
        {
            name: "input2",
            type: "int",
            message: message2,
            default: input2
        },
        {
            name: "input3",
            type: "list",
            message: message3,
            default: input3,
            choices : choices
        },
        {
            name: "input4",
            type: "list",
            message: message4,
            default: input4,
            choices : choices
        }
        
    ])

}

module.exports = {
    title,
    table,
    input
}