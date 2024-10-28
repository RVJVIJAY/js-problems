
const char="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lenrandom=7;


const generate=()=>{
    var result=''
    for(let i=0;i<=lenrandom;i++){
        // console.log('5'-2)
        const random=Math.floor(Math.random()*char.length)
        result+=char.substring(random,random+1);
       
    }
    console.log(result)
    document.getElementById("display").innerHTML=result;
   
    }
    
const click=document.getElementById("btn")

click.addEventListener("click",generate)
