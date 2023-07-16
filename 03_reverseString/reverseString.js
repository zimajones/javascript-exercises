const reverseString = function(str) {
    var splitstring = str.split("");
    var reverseArray = splitstring.reverse();
    var joinarray = reverseArray.join("")
    return joinarray
};


console.log(reverseString("hello there"));



// Do not edit below this line
module.exports = reverseString;
