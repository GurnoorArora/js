//global scope

//{}//iske andr jo hoga wo hoga iska local scope

//ab jo let aur const hoga na wo scopes me defined hoga
//that is if i am defining like any of the
//variable using let ya const wo scope me rhega
//lekin jab var use krte h tb na wo value baher bhi
//ajati h 

if(true)
{
    let a=10;
    const b=20;
    var c=20;
}
//console.log(a);//a not defined error throw krega
console.log(c);//ye value print krdia
