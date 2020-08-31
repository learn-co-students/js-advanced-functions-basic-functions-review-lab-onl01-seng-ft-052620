// Your code here
// Implement a function called saturdayFun. It should return a String
//  like "This Saturday, I want to ....!" Fill in the ... with the activity 
//  that's passed in as the first parameter. If nothing is passed in, default to "roller-skate". 
//  Use the learn program to verify you've gotten a working implementation. 
//  Come back here once you've gotten just this set of tests passing.

 function saturdayFun(activity = "roller-skate"){
     return `This Saturday, I want to ${activity}!`
 }

 let mondayWork = function (activity = "go to the office") {
     return `This Monday, I will ${activity}.`
 }

 function wrapAdjective(flair = "*"){
     return function innerFunction(param = "special"){
         return `You are ${flair}${param}${flair}!`
     }
 }


 let Calculator = {
    add: (arg1, arg2) =>{
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

 };

 function actionApplyer(number, functions) {

    for (let i=0; i<functions.length; i++){
        number = functions[i](number)
    }
    
    return number
 }