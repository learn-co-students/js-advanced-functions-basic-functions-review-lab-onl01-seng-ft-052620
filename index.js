// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return function innerFunction(word = "special") {
        return `You are ${flair}${word}${flair}!`
    }
}

let Calculator = {
    add: (arg1, arg2) => {
        return arg1 + arg2
    },
    subtract: (arg1, arg2) => {
        return arg1 - arg2
    },
    multiply: (arg1, arg2) => {
        return arg1 * arg2
    },
    divide: (arg1, arg2) => {
        return arg1 / arg2
    }
}

function actionApplyer(integer, functions) {
    for (let i=0; i<functions.length; i++) {
        integer = functions[i](integer)
    }
        return integer
}