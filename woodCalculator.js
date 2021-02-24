function woodCalculator(chair, table, bed){
    var chairMeasure = 1;
    var tableMeasure = 3;
    var bedMeasure = 5;
    if(chair < 0 || table < 0 || bed < 0){
        return "Oops! Value can't be negative.";
    }
    else {
        var result = chair * chairMeasure  + table * tableMeasure + bed * bedMeasure;
        return result;
    }
}

var y = woodCalculator(10, 32, 21);
console.log(y)