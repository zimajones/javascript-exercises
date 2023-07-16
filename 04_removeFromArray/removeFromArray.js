const funArray = [1, 2, 3, 4, 5];

const removeFromArray = function(value, index, arr) {
    if(value === 3) {
        arr.splice(index, 2);
        return true
    }
    return false

};

console.log(funArray);
// Do not edit below this line
module.exports = removeFromArray;
