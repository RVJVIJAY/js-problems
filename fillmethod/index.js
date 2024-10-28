const a=[1,2,3,4,5,6]
a.fill(0,-4,-2)   //val,start,end  , it mutate the original array 
console.log(a)


const b=[1,2,3,4,5,6]
b.fill(1) // when i dont give the start and end it will fill 1 as all the index.
console.log(b)

const c=[1,2,3,4,5,6]
c.fill(3,2,4)
console.log(c)

const d=Array(3).fill({}) 
d[1].product="tshirt" // i just only give value for index 1 but the reference will apply for all the index
console.log(d) // obj with key value pair 