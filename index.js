// Your code here
function saturdayFun(str = 'roller-skate'){
    return `This Saturday, I want to ${str}!`
}

function mondayWork(str = 'go to the office'){
    return `This Monday, I will ${str}.`
}

let wrapAdjective = function(str = '*'){
    return function(param = 'special'){
        return `You are ${str}${param}${str}!`
    }
}

const Calculator = {
    add(a,b){
        return a + b
    },
    subtract(a,b){
        return a-b
    },
    multiply(a,b){
        return a*b
    },
    divide(a,b){
        return a/b
    }
}

function actionApplyer(start, arrayF){
    if (arrayF.length === 0){
        return start;
    }
    else{
        let newObj = Object.assign(start)
        arrayF.forEach(f => {
            newObj = f(newObj);
        });
        return newObj
        
    }
}

