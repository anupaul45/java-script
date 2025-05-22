function findGreaterNumber(num1, num2) {
    if (num1 > num2) {
        return num1 + " is greater than " + num2;
    } else if (num2 > num1) {
        return num2 + " is greater than " + num1;
    } else {
        return "Both numbers are equal.";                                                                  
    }
}
console.log(findGreaterNumber(4, 4));   

