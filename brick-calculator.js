function brickCalculator(num){
    var firstPart = 15;
    var secondPart = 12;
    var thirdPart = 10;
    if (num <= 10) {
        var result = 1000 * num * firstPart;
        return result;
    }
    else if (num <= 20) {
        var result = 1000 * 10 * firstPart;
        var result2 = num-10;
        var finalResult2 = result2 * secondPart * 1000;
        var output = finalResult2 + result;                                                                               //console.log(x);
        return output;
    }
    else {
        var result = 1000 * 10 * firstPart;
        var result2 = 1000 * 10 * secondPart;
        var firstAndSecondResult = result + result2;
        var result3 = num - 20;
        var finalResult3 = result3 * thirdPart * 1000;
        var output = finalResult3 + firstAndSecondResult;
        return output;
    }
}

var x = brickCalculator(22);
console.log(x);