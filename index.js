function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair="*"){
  return function(phrase="special"){
    return `You are ${flair}${phrase}${flair}!`
  }
}

const Calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: function(num1, num2){return num1 - num2},
  multiply: (num1, num2) => num1*num2,
  divide: (num1, num2) => num1/num2
}

function actionApplyer(startingInt, fnArray){
  for (const currentFn of fnArray){
    startingInt = currentFn(startingInt);
  }
  return startingInt;
}
