const str="i want to become','a professional front end','develper'";
const splitarr=[];
var start=0;
for(let i=0;i<=str.length;i++){
    if(str.charAt(i)===' '||str.charAt(i)===',' ||i===str.length){
        if(start!==i){
            splitarr.push(str.substring(start,i))
        }
        start+=i;
       
    }
}
// console.log(splitarr)


const strarr=['i want to become','a professional front end','develper'];
const r=strarr.map((val)=>{
   return val.split(' ') 
})
console.log(r.flat())  


//Or else we use combinatation of flatmap method :

const res=strarr.flatMap((val)=>{
    return val.split(' ')
})
console.log(res)

//string to convert spliting array using regular expression:
console.log(str.split(/[ ,]+/))
