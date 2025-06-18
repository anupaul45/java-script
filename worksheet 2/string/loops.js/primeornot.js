let n=13
let flag=true // its prime
for (let i=2;i<n;i++){
    if(n%i==0){
        console.log("composite")
        flag=false
        break
    }
} 
if(flag==true){
    console.log("its prime")
}
else{
    console.log("its composite")
}