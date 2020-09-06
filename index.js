// Your code hfunf
function saturdayFun (activity='roller-skate'){
  return `This Saturday, I want to ${activity}!`
}


function mondayWork(activity='go to the office'){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective (ne= '*') {
    return function (adjective="special") {
     return `You are ${ne}${adjective}${ne}!`
}
}

let Calculator = {

  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }

}


function actionApplyer(i, arr){
 let  start = i
  for ( let i = 0; i < arr.length;i ++){
    start = ray[i](start)
  }
  return start
}
