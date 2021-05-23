const chalk = require('chalk')
const figlet = require('figlet')

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

module.exports = {
    title,
    table
}