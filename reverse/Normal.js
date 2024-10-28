let array = [1, 2, 3, 4, 5];

const reverse=(arr)=>{
    let a=2;
    return arr.reverse();
}
console.log(reverse(array))

function method2(){
  console.log(array) 
  let a=[]
  for (let i=array.length-1;i>=0;i--){
    
    console.log(...array[i].toLocaleString())
    a.push(array[i])
    console.log(a)
}
}
method2()