var a="vijay"
const arr=Array.from(a)  //the from method convert the iterable object into an new array 
console.log(arr)

const arr1=[1,3,4]
const res=Array.from(arr1,(v,i)=>v*2)
console.log(res)

function singlearr(){
    console.log(arguments)
    const res=Array.from(arguments)
    console.log(res)

}
singlearr(1,3,4,5)


const v=Array.from({length:10},(v,i)=>i)
const v1=Array.from(arr1,(v,i)=>v*5)
console.log(v)
console.log(v1)
