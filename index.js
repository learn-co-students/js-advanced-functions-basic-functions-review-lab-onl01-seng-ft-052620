// Your code here
function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity ='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(var1='*') {
  return function(var2='special') {
    return `You are ${var1}${var2}${var1}!`
  }
}


const Calculator = {
  add() { return 1 +3},
  subtract() { return 1 -3},
  multiply() { return 1 * 3},
  divide() { return 10 / 5}
};

function actionApplyer(start, array) {
  let a = start
  array.forEach( i => a = i(a))
  return a
 }
