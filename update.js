function celsiusToFahrenheit(input2,input3,input4,model) {
    const newLeftValue = input2
    const newLeftUnit = input3
    const newRightValue = input2*(9/5) +32
    const newRightUnit = input4
    
    return {
        ...model,
        leftValue: newLeftValue,
        leftUnit: newLeftUnit,
        rightValue: newRightValue,
        rightUnit: newRightUnit
    }
}

function fahrenheitToCelsius(input2,input3,input4,model) {
    const newLeftValue = input2
    const newLeftUnit = input3
    const newRightValue = (input2 -32)*(5/9)
    const newRightUnit = input4
    
    return {
        ...model,
        leftValue: newLeftValue,
        leftUnit: newLeftUnit,
        rightValue: newRightValue,
        rightUnit: newRightUnit
    }
}

function fahrenheitToKelvin(input2,input3,input4,model) {
    const newLeftValue = input2
    const newLeftUnit = input3
    const newRightValue = (input2 -32)* (5/9) + 273.15
    const newRightUnit = input4
    
    return {
        ...model,
        leftValue: newLeftValue,
        leftUnit: newLeftUnit,
        rightValue: newRightValue,
        rightUnit: newRightUnit
    }
}

function kelvinToFahrenheit(input2,input3,input4,model) {
    const newLeftValue = input2
    const newLeftUnit = input3
    const newRightValue = (input2 - 273,15)*(9/5) + 32 
    const newRightUnit = input4
    
    return {
        ...model,
        leftValue: newLeftValue,
        leftUnit: newLeftUnit,
        rightValue: newRightValue,
        rightUnit: newRightUnit
    }
}

function celsiusToKelvin(input2,input3,input4,model) {
    const newLeftValue = input2
    const newLeftUnit = input3
    const newRightValue = input2 + 273.15
    const newRightUnit = input4
    
    return {
        ...model,
        leftValue: newLeftValue,
        leftUnit: newLeftUnit,
        rightValue: newRightValue,
        rightUnit: newRightUnit
    }
}

function kelvinToCelsius(input2,input3,input4,model) {
    const newLeftValue = input2
    const newLeftUnit = input3
    const newRightValue = input2 - 273.15
    const newRightUnit = input4
    
    return {
        ...model,
        leftValue: newLeftValue,
        leftUnit: newLeftUnit,
        rightValue: newRightValue,
        rightUnit: newRightUnit
    }
}
module.exports = {
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    fahrenheitToKelvin,
    kelvinToFahrenheit,
    celsiusToKelvin,
    kelvinToCelsius
}