// Your code here

function saturdayFun(act="roller-skate") {
   return `This Saturday, I want to ${act}!`
}


function mondayWork(act="go to the office") {
return `This Monday, I will ${act}.`
}

function wrapAdjective(string="*") {
return function(par="special") {
    return `You are ${string}${par}${string}!`

}
}
wrapAdjective("%")("a dedicated programmer")

let Calculator = { add: function() 
    { return 1 + 3}, 
    subtract: function() 
    { return 1 - 3}, 
    multiply: function() 
    { return 1 * 3}, 
    divide: function() 
    { return 10 / 5}
}

function actionApplyer(number, array) {
let num = number
    for (let i = 0; i < array.length; i++ ){
     num = array[i](num)
}
return num 
}
