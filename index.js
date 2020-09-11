function saturdayFun(activity="roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun();

function mondayWork(activity="go to the office") {
    return(`This Monday, I will ${activity}.`);
}
mondayWork();

function wrapAdjective(w="*") {
    return function(a="special") {
        return(`You are ${w}${a}${w}!`);
    }
}
wrapAdjective("%")("a dedicated programmer");

let Calculator = {
    add: function add() {
        return(1 + 3);
    },
    subtract: function subtract() {
        return(1 - 3);
    },
    multiply: function multiply() {
        return(1 * 3);
    },
    divide: function divide() {
        return(10 / 5)
    },
};

function actionApplyer(start, array) {
    let a = start;
    for(let i = 0; i < array.length; i++){
        a = array[i](a);
    }
    return a;
}
