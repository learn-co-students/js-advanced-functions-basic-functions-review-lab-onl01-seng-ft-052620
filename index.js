// Your code here
function saturdayFun(arg = 'roller-skate'){
    return `This Saturday, I want to ${arg}!`
}

let mondayWork = function( arg = 'go to the office'){
    return `This Monday, I will ${arg}.`
}

let wrapAdjective = function(style="*") {
    return function(adjective="a hard worker") {
      return `You are ${style}${adjective}${style}!`
    }
  }

  const Calculator = {
  add(a, b) { return a + b},
  subtract(a, b) { return a -b},
  multiply(a, b) { return a * b},
  divide(a, b) { return  a / b}
    }

    function actionApplyer(int, array) {
        for (const arr of array){
          int = arr(int)
        }
        return int
      }
     