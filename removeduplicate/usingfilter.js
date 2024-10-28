//Method 1:

/* const arr=[1,3,2,3,4,6,6,1];

const res=arr.filter((val,index,originalarr)=>{
    return originalarr.indexOf(val)===index 
})
console.log(res) */


//Method 2  :
const arr = [1, 21, 3, 21, 4, 1, 5, 3];
const uniqueArr = [];
const seen = {};
const res2=arr.forEach(value => {
    if(!seen[value]){
        uniqueArr.push(value);
        seen[value]=true;
    }
});
console.log(uniqueArr)
console.log(seen)

//Method 3 :

const res3=arr.reduce((arr,val)=>{
      if(!arr.includes(val)){
        arr.push(val)
      }
      return arr;
},[])
console.log(res3)