function isMultipleOfThree(num) {
    if (num % 3 === 0) {
        return "The number is a multiple of 3.";
    } else {
        return "The number is not a multiple of 3.";
    }
}
console.log(isMultipleOfThree(9));   
console.log(isMultipleOfThree(10));  
console.log(isMultipleOfThree(0));   