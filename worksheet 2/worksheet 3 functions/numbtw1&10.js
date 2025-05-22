function isBetweenOneAndTen(num) {
    if (num >= 1 && num <= 10) {
        return "The number is between 1 and 10.";
    } else {
        return "The number is not between 1 and 10.";
    }
}
console.log(isBetweenOneAndTen(5));   
console.log(isBetweenOneAndTen(0));  
console.log(isBetweenOneAndTen(15));  
