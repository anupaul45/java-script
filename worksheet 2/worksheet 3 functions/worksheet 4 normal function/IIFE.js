//(function(){
    //console.log ("IIFE executed")})()

(function(n) {
  const factorial = (num) => {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
  };
  
  console.log(`Factorial of ${n} is:`, factorial(n));
})(5); 
