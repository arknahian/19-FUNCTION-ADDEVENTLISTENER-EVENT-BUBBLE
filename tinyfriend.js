// var x = ["Al Nahian Ark", "Tony Stark", "Hi MA "];
// for (let i = 0; i < x.length; i++) {
//     const element = x[i];
//     console.log(element.length)
// }

function tinyFriend(name) {
    var tinyName = name[0];
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        var result = element.length;
        if (tinyName.length > result) {
            tinyName = element;
        }
    }
    return tinyName;
}

var x = ["T", "Stark", "Justin", "Bieber", "qo"];
var y = tinyFriend(x);
console.log(y);

