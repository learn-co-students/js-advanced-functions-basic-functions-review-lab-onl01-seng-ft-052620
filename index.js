// Your code here
function saturdayFun(activity="roller-skate") {
 return (`This Saturday, I want to ${activity}!`);
}

let mondayWork = function(activity="go to the office") {
    return (`This Monday, I will ${activity}.`)
}

let wrapAdjective = function(flare = "*") {
    return function(param="special") {
      return (`You are ${flare + param + flare}!`) 
    }
}

const Calculator = {
    add: function() {
        return 1 + 3
    },
    subtract: function() {
        return 1 - 3
    },
    multiply: function() {
        return 1 * 3
    },
    divide: function() {
        return 10/5
    }
}

function actionApplyer(int, arr) {
  for (let i = 0; i < arr.length; i ++){
      int = arr[i](int);
  }
  return int;
}