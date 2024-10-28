const num1=[[1,2],[3,4]]
const num2=[5,[6]]
const num3=5
const concatearr=[[num1[0][0],num3],[num1[0][1]],num1[1][0],[num1[1][1]]]
// console.log(concatearr)

const arr1=[[1],[2]]
const arr2=[3,[4]]
const arr3=5;
//expected output : [[1,5],[2],3,[4]];
// we achive by using concat and push method , concat return new array it doesnt modify the existing array 

const res=arr1[0].push(arr3)
console.log(arr3)
console.log(arr1)
const newarr=arr1.concat(arr2)
console.log(newarr)
