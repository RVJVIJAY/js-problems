
function isprime(num){
    for(let i=2 ;i<=Math.sqrt(num);i++){
        if(num<=1) return false;
        if(num%i===0) return false;
    }
    return true
    
}

function largestprimeno(arr){
 const res=arr.filter(isprime);
 console.log(res)
 return res.length>0 ? Math.max(...res) : null ;
}
const arr= [3, 12, 17, 25, 7, 14,97, 19, 22, 31, 50];

const res=largestprimeno(arr);
console.log(res)