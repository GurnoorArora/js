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
//checking what blame is
//trying shift and unshift in arrays
let test=A.shift();//shift removes the first element and returns it
console.log(test);
console.log(A);
A.push(1,2,3,4,5);//important note-push in javascript can be used to add more than one element 
console.log(A);
//unshift 
A.unshift(1);//adds in the beginning
console.log(A);
/* for push function- if I want to concate two arrays then if i use push to that it wont happen*/
 A=[1,2,3];
let B=[4,5,6];
A.push(B);
console.log(A);//the output will be[1,2,3,[4,5,6]]

//in order to concatenate two arrays i need to use concat() method
//the concat method returns another array 
let C=A.concat(B);
console.log(C);

//see ... is called as spread operator it is also used to concate multiple elements 
D=[...A,...B];
console.log(D);
//there is one another otper-'flat' operator which resolves arrays within arrays and further
//lets us test that out
A=[1,2,[1,2,[1,2]],[3,4,5,[6,[7,8]]]];
let AnotherA=A.flat(2);
console.log(AnotherA);
//the argument inside the flat() method is the level till which we want to resolve our array which in case we can put
//INDFINITY which will resolve array upto any level//in my case i have put the argument to 2 which will resolve it till 2 level


const name="Gurnoor";

console.log(Array.isArray(name));
//Array.isArray() method helps us check if the given argument is array or not

let name2=Array.from("Gurnoor");
console.log(name2);
console.log(Array.of(100,200,300));
//