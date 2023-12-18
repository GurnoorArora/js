function sayMyName()
{
    const name="gurnoor";
    console.log(`hello,${name}`);
}
//sayMyName //refernce to the function
sayMyName();//Execution

function addTwoNumbers(number1,number2)
{
    console.log(number1+number2);
}

addTwoNumbers(1,2);
addTwoNumbers(1,"4");//dono ko strings bna dia
//addTwoNumbers(2,"a"); yaha dikkt ayegi

function addTwoNumbers(number1,number2)
{
    let result=number1+number2;
    return result;
}

const result=addTwoNumbers(1,2);
console.log(result);


function calculateCartPrice(...num1)
{
    return num1;
}
console.log(calculateCartPrice(200,400,500));
function calculateCartPrice(val1,val2,...num)
{
    return num;
}
console.log(calculateCartPrice(1,2,300,4000,5000));
//functions with objects
const user={
    username:"hitesh",
    price:199
}
function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

//we can also directly add the username

handleObject(
    {
        username:"sam",
        price:399
    }
)

//for arryas
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray)
{
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));