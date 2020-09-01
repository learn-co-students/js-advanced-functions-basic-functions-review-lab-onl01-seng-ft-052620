function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(decoration = "*"){
    return function(stuff="special"){
        return `You are ${decoration}${stuff}${decoration}!`
    }
}

const Calculator = {
    add: () => {return 1 + 3}, 
    subtract: () => {return 1 - 3}, 
    multiply: () => {return 1 * 3}, 
    divide: () => {return 10 / 5}
}

function actionApplyer(start, array){ 
    array.map(function(func){
        return func(start)
    })
    return start
}