const arr= [3, 12, 17, 25, 7, 14, 19, 22, 31, 50];

const res=arr.filter((num)=>{
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num<=1)return false 
        if(num%i===0){
            return false
        }

    }
    return true 
})

console.log(res)