//const str = "JavaScript is awesome";
//const vowels = ['a', 'e', 'i', 'o', 'u'];

//const count = str
  //.toLowerCase()
  //.split('')
  //.filter(char => vowels.includes(char)).length;

//console.log("Number of vowels:", count); 

const str = "JavaScript";
const reversed = str.split('').reverse().join('');

console.log(reversed); // Output: "tpircSavaJ"

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // remove spaces, punctuation
  const reversed = cleanStr.split('').reverse().join('');
  return cleanStr === reversed;
}

console.log(isPalindrome("madam"));           // true
console.log(isPalindrome("racecar"));         // true
console.log(isPalindrome("hello"));           // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

const sentence = "javascript is awesome";

const capitalized = sentence
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

console.log(capitalized); // Output: "Javascript Is Awesome"

function countAlpha(str) {
  // Remove all instances of "alpha"
  const withoutAlpha = str.replaceAll("alpha", "");
  
  // Calculate difference in length
  const count = (str.length - withoutAlpha.length) / "alpha".length;
  
  return count;
}

