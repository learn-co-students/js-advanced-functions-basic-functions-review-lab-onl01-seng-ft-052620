function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function wrapAdjective(wrap = "*") {
    return function(param = "special") {
        return `You are ${wrap}${param}${wrap}!`
    }
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

const Calculator = {
    add: function(a, b) {
       return a + b
    },
    subtract: function(a, b) {
        return a - b
    },
    multiply: function(a , b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b
    }
}

function actionApplyer(integer, array) {
    let accumulator = integer
    for (const element of array) {
        accumulator = element(accumulator)
    }
    return accumulator
}