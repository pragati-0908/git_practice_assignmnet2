let num=13;
let count=0
for(let i=0;i<num;i--){
if(num%i!==0){
count=1;
}
}
if(count==2){
console.log(i,"is a prime number")
}else{
console.log(i,"not a prime number")
}