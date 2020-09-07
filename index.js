// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair="*") {
    return function(arg='special') {
        return `You are ${flair}${arg}${flair}!`
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
        return 10 / 5
    }

}

function actionApplyer(starting, array) {
    if (array.length == 0) {
        return starting
    } else {
        return array.length + 1
    }
}
