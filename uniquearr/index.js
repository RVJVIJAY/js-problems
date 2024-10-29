const arr=[1,3,2,1,5,3,7];
const res=arr.filter((val)=>{
  return  arr.indexOf(val)===arr.lastIndexOf(val)
})
console.log(res)