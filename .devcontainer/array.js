// learning arrays and methods

let myarr=[1,2,3,4,5];
let A=[1,"gurnoor",2,true];

console.log(A[0]);//1
console.log(A[1]);//gurnoor
console.log(typeof(A[1]));//string
console.log(typeof(A));//output-object

//trying push and pop
A.push("hello");
console.log(A);
A.pop();
console.log(A);
//slice and splice
console.log(A.slice(1,3));
console.log(A);
console.log(A.splice(1,3));//even includes the last one and cuts the part of the array from the rest
console.log(A);
