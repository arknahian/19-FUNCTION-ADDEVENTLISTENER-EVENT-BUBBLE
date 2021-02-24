function feetToMile(feet){
    var result = feet / 5280;
    var output = result.toFixed(8)
    return output;
}
var x = feetToMile(9);
console.log(x);