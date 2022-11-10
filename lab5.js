"use strict";
//Q1
function max(x1, x2){
      // if (typeof x1 !=="number"|| typeof x2 !=="number")
      //  return"both parameters must be number type"
      if(x1>x2) return x1;
     else return x2;
     
}

console.log(max(true,4))

//Q2 
console.log(".........//Q2.........")
function maxOfThree(x,y,z){
     if (typeof x !=="number"|| typeof y !=="number"||typeof z !=="number")
      return"all parameters  must be number type"
 else if(x>=y) {
      if(x>z)return x;  
     else if(z>=x)  return z;   
   
 }
 else if(y>x){
  if (y>z) return  y; 
   else  if(z>y) return z; 
 }
if(z >=y ){
 
 if(x>z) return x;
 else if(z>x) return z;
}
else if(x>=z){
 if(x>y) return x;
 else if(y>x) return  y
}
}

//Q3
console.log(".........//Q3.........")
function isVowel( theChar){
 //if(typeof string !=="string") return "the argument is not string"
 const thevalue = theChar==='a'||theChar==="e"||theChar==="i"||theChar==="o"||theChar==="u"
 ||theChar==='A'||theChar==="E"||theChar==="I"||theChar==="O"||theChar==="U"
if(thevalue)
 return true;

 return false;
}
//Q4
console.log(".........//Q4.........")
function sum(nums){
 let theSum=0;
 for(let key of nums){
 if(typeof key==="number")
 theSum+=key;
 }
 return theSum
 
}
function multiply(nums){
let product =1;
for(let key of nums){
 if(typeof key==="number")
 product*=key;
 }
 return product

}
//Q5
console.log(".........//Q5.........")
function reverse(str) {
 let theReverse="";
 if(typeof str ==="string"){
    for(let i =str.length-1;i>=0 ;i--){
     theReverse+=str.charAt(i)
    }
 }
 return theReverse;
}
//Q6
console.log(".........//Q6.........")
function findLongestWord( arr) {
 let word =arr[0]
 let max =word.length;
 for(let key of arr){
  if(typeof key==="string"){
    if(key.length>max){
     max =key.length;
     word=key;
    }

  }
  
 }
 return max;

}
//Q7
console.log(".........//Q7.........")
 function filterLongWords(arr, num){
  let newArray=[];
  let i=0;
  if(typeof num !=="number") {
   return;
  }
  for(let key of arr){
   if(key.length>num){
   newArray[i]=key;
   i++;
   }
 }
  
  return newArray;
}
//Q8
console.log(".........//Q8.........")



 function computeSumOfSquares(arr){
 const result=   arr.reduce((x,y)=> (0, x + y **2)) ;
return result;
}
//Q9
console.log(".........//Q9.........")

function printOddNumbersOnly(arr){
 const oddNumber= arr.filter((x)=>x%2===1)
 return oddNumber;
}
//Q10
console.log(".........//Q10.........")
function computeSumOfSquaresOfEvensOnly(arr){

 const result =arr.filter(x=>x%2===0).reduce((x,y)=>(0,x*x+ y*y))
 return result;
}


//Q11
console.log(".........//Q11.........")
function sum (arr){
 const result = arr.reduce((x,y)=>x+y)
 return result;
}

function multiply(arr){
 const result =arr.reduce((x,y)=>x*y)
 return result;
}

//Q12
console.log(".........//Q12.........")
function findSecondBiggest(array){
let largest = 0 ;
let secondLargest = 0 ;
if(array.length<1){
return "enter valid input" ;
          }
for(let i=0 ;i<array.length ;i++){

if(array[i] > largest){
largest = array[i] ; 
 }
 }
for(let i=0 ;i<array.length ;i++){if(array[i] > secondLargest && array[i]!=largest){
secondLargest = array[i] ; 
 }
 
}
return secondLargest ; 
}
//Q13
console.log(".........//Q13.........")
function printFibo(n){

 let next  ;
 let a = 0 ;

 let b = 1 ;

 for(let i = 1 ; i <=n ; i++){
          console.log(a) ;
           
           
           next = a + b ; 
             a = b ;
             b = next ; 
           }

}



//Q14
console.log(".........//Q14.........")
function myfun(){
 var email = document.getElementById('emailAdd').value ;
 var pass = document.getElementById('pass').value ; 

 var mark = document.getElementById('check').value ;

 var myUrl  = document.getElementById('url').value ; 
 
 
 console.log('email : ' + email)  ;
 console.log('password  : ' + pass)  ;
 console.log('Your URL : ' + myUrl) ; 
 console.log('checkiedBox : ' + mark) ;
 
 alert("email : " +  email + '\n' + 'password : ' + pass+ '\n' + 'MyUrl : ' + myUrl
  + '\n' + 'checkedBox : ' +  mark 
 ) ;
}