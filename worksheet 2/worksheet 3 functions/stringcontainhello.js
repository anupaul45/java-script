function containsHello(str) {
    if (str.includes("hello")) {
        return "The string contains the word 'hello'.";
    } else {
        return "The string does not contain the word 'hello'.";
    }
}
console.log(containsHello("hello there!"));       
console.log(containsHello("Hi, how are you?"));   
console.log(containsHello("He said hello!"));     
