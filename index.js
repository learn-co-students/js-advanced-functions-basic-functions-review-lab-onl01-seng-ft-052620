// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(word="special"){
        return `You are ${flair}${word}${flair}!`
    }
}
// defines an object called Calculator
//// that has a function called add, sub, mult, divide
let Calculator = {
    add(num1, num2) {
        return (num1 + num2)
    },
    subtract(num1, num2) {
        return (num1 - num2)
    },
    multiply(num1, num2) {
        return (num1 * num2)
    },
    divide(num1, num2) {
        return (num1 / num2)
    }
}

//Defines a function called actionApplyer
// receives two arguments: a starting integer and an array of functions
// returns the given starting point, unchanged, when the array is empty:
function actionApplyer(integer, array) {
    for (let i=0; i<array.length; i++){
        integer = array[i](integer)
    }
    return integer
}