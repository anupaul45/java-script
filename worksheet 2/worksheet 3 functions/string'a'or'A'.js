function containsAora(str) {
    if (str.includes('a') || str.includes('A')) {
        return "The string contains 'a' or 'A'.";
    } else {
        return "The string does not contain 'a' or 'A'.";
    }
}

console.log(containsAora("Apple"));  
console.log(containsAora("grape"));   
console.log(containsAora("Hello"));   