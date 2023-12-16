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
