// Your code here
function saturdayFun(activity="roller-skate"){
    return(`This Saturday, I want to ${activity}!`)
}

let mondayWork = function(activity='go to the office'){
    return(`This Monday, I will ${activity}.`)
}

function wrapAdjective(symbol="*"){
        return function(property="special"){
            return(`You are ${symbol}${property}${symbol}!`)
        }
}

let Calculator = new Object();

Calculator.add = function(num1, num2){return num1 + num2}
Calculator.subtract = (num1, num2) => {return num1 - num2}
Calculator.multiply = (num1, num2) => {return num1 * num2}
Calculator.divide = (num1, num2) => {return num1/num2}

function actionApplyer(userInt, arrayOfFunctions=[]){
    if (arrayOfFunctions.length === 0)
        return userInt;
    else {
        let value = arrayOfFunctions.reduce(function(total, element){ return element(total)}, userInt)
        return value
    }
        
}