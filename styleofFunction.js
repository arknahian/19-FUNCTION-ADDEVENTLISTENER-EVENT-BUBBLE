function addSum() {
    var num = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        num = element + num;
    }
    function logInfo(message) {
        console.log(message)
    }
    logInfo("Good Morning!");
    return num;
}
var output = addSum(12, 21, 32);
console.log(output);