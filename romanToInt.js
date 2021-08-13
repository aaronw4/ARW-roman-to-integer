var romanToInt = function(s) {
    let str = s.split('')
    let roman = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    }
    let number = 0
    let temp = 0

    for (i = str.length-1; i >= 0; i--) {
        if (roman[str[i]] >= temp) {
            temp = roman[str[i]]
            number = number + roman[str[i]]
        } else {
            number = number - roman[str[i]]
        }
    }

    return number   
};


console.log(romanToInt('III'))
