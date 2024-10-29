const arr=['1','2','3'].map(parseInt)
console.log(arr) //parseInt('1',0) ,parseInt('2',1) ,parseInt('3',2)
// parseInt function take 2 argument one is string and anthor one is radix [it means take base value of number like base 10,2,16,8 binary,octal,decimal,hexadecimal]

console.log(parseInt('2A',16) )// hexa decimal val is 0-9 and A-F 10-15 
console.log(parseInt('32',8) )//octal base
console.log(parseInt('1011',2))// binary
console.log(parseInt('12',10) )//decimal , when i not spefic the radix it take default as decimal
console.log(parseInt('3',2))