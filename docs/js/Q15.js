const thebutton =document.getElementById("butt") 
const date = new Date();
console.log(date);
const bb = setInterval(() => {
     document.getElementById("demo").innerHTML =
     new Date();
     
},100);

// thebutton.onclick = ()=>{
//      const dd = "new Date(); "
// document.getElementById("demo2").innerHTML = 
// "Stopped on :" +bb.toLocaleString()+"";
// }
     

