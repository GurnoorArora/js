//object literals
const mySym=Symbol("key1");
const Jsuser={
   [mySym]:"key1",
    name:"gurnoor" ,
    age:"21"
}
//there are two ways actually to access members of the object  one is using dot operator and the second one is bracket one
console.log(Jsuser.name);
console.log(Jsuser["age"]);//make sure to add double quotes when specfying inside
console.log(typeof(Jsuser[mySym]));
//we can also freeze the values of the object
//Object.freeze(Jsuser);
Jsuser.name="harkirat";
console.log(Jsuser.name);
//adding functions to the object
Jsuser.greeting=function()
{
    console.log("hello js user this gurnoor this side");
}
console.log(Jsuser.greeting());
Jsuser.greeting2=function()
{
    console.log(`hello js user ${this.name}`);//string interpolation
    
}
console.log(Jsuser.greeting2());


const tinderUser={}
tinderUser.id="123";
tinderUser.name="Sammy";
tinderUser.isLoggedin=false;

console.log(tinderUser);

const regularUser=
{
    email:"sum@gmail.com",
    fullname:{
        userfullname:{
            firstname:"gurnoor",
            lastname:"arora"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
//combining objects
const obj1={
    1:"a",
    2:"b"

}

const obj2={
    3:"c",
    4:"d"
}

const obj3=Object.assign({},obj1,obj2);//this function 'assign' assign's arguments have 2 parameters (target,source)
//here it returns a new object to and the target is the new object if it was obj1 in place of  {} then the changes woudl have been 
//made to obj1 itself now since we took {} thats why we are making changes to an empty object and then storing it in obj3
console.log(obj3);
console.log(obj1);
// we can ALSO USE 'SPREAD OPERATOR ...' 
const obj4={...obj1,...obj2};
console.log(obj4);

//array of objects
const users=[
    {
        id:1,
        email:"1@gmail.com"
    },
    {
        id:2,
        email:"2@gmail.com"
    }
]
console.log(users[1].email);
//now we will try to retrieve the keys and values //results the keys and values in array

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name')); 

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//to make code cleaner
//we use a differe kind of syntax
//const{jo values we have to extract}=the object from which value is to be extracted

const{courseInstructor: instructor}=course;
console.log(instructor);