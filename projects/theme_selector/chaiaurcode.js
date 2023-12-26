const buttons=document.querySelectorAll('.button');
//console.log(buttons)
buttons.forEach(function(button)
{
    //event listener
    button.addEventListener('click',function(e){
        document.body.style.backgroundColor=button.id;
    }
    );
});