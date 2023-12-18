function one()
{
    const username="gurnoor";
    function two()
    {
        const website="youtube"
        console.log(username);
    }
    //console.log(website)//will throw an error 
    //become nested function has the access to
    //parents functions variable but parent doesnt have
    two()
}

one()

//hoisting 
console.log(oneAdd(4));
function oneAdd(a)
{
    return 1+a;
}
//console.log(twoAdd(5));//this will give error
const var2=function twoAdd(b)
{
    return 1+b;
}
