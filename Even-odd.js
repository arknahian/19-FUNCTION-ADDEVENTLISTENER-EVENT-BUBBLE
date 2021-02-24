// var num = [12, 21, 32, 21, 32, 43, 32, 21, 32, 42];
// var evenNum = [];
// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     if (element % 2 === 0) {
//         evenNum.push(element);
//         console.log(evenNum)
//     }
// }

// by functional


function evenNums(number) {
    var evenNumber = [];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element % 2 === 0) {
            evenNumber.push(element);
        }
        
    }
    return evenNumber;
}

var x = [82, 31, 42, 32, 43];
var result = evenNums(x);
console.log(result);