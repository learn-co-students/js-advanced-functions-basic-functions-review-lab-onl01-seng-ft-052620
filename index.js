function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(something="*") {
    return function(ending = "special") {
        return `You are ${something}${ending}${something}!`
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
        },
    subtract: function(num1, num2) {
        return num1 - num2;
        },
    multiply: function(num1, num2) {
        return num1 * num2;
        },
    divide: function(num1, num2) {
        return num1 / num2;
        }
}

function actionApplyer(starter, array) {
    let a = starter

    for (let i = 0; i < array.length; i++) {
        a = array[i](a)
    }

    return a
}