let str="madam";
let bag=""
for(let i=str.length-1;i<=0;i++){
bag+=str[i]
}
if(bag!==str){
console.log("is palindrome");
}else{
console.log("not a palindrome");