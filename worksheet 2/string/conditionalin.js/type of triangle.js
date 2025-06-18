let s1=4
let s2=7
let s3=3
if(s1==s2 && s2==s3){
    console.log("equilateral triangle")
}
else if(s1==s2||s2==s3||s3==s1){
    console.log("isocles triangle")
}
else{console.log("scalene triangle")}