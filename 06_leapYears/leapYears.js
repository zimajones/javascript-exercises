const leapYears = function(num) {
    if (num % 4 == 0 && num % 400 == 0) {
        console.log('true')
        
    }
    else if (num % 4 == 0) {
        console.log('true as well')
    }
    
    else if (num % 100 == 0) {
        console.log('false')
    }
    else {
        console.log('false as well')
    }
}

leapYears(34992)

// Do not edit below this line
module.exports = leapYears;

//i checked the solution after and they solved it in one line smh you all will rue the day!
