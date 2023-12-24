 const user={
    username:"hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);

    }
 }

 //user.welcomeMessage();
 //user.username="sam";
 //user.welcomeMessage();
 /*function chai()
 {
    let username="gurnoor "
    console.log(this);
 }
 chai()*/

 //const chai= ()=>
 //{
   //   let username="hitesh"
     // console.log(this);
// }

 const addTwo=(num1,num2)=>{
    return num1+num2
 }
 console.log(addTwo(3,4));

 //implicit 
 const addTwwo=(num1,num2)=> (num1+num2)
//if we want to return an object

const addTWO=(num1,num2)=>({username:"hitesh"});

const myArray=[2,6,7,8]
//myArray.forEach(()=>())