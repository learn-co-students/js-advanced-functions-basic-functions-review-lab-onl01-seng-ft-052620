// Your code here
function saturdayFun(activity="roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

let mondayWork = function(string="go to the office") {
    return (`This Monday, I will ${string}.`)
}



function wrapAdjective(pzazz = "*"){
    return function innerFunction(string = "special"){
        return `You are ${pzazz}${string}${pzazz}!`
    }
}

let Calculator = {
    add: (arg1, arg2) =>{
        return arg1 + arg2 },
    subtract: (arg1, arg2) =>{
        return arg1 - arg2 },
    multiply: (arg1, arg2) =>{
        return arg1 * arg2 }, 
    divide: (arg1, arg2) =>{
        return arg1/arg2 }
    };
  
function actionApplyer(int, functionsArray) {

    for (let i=0; i<functionsArray.length; i++){
        int = functionsArray[i](int)
    }
    
    return int
 }
