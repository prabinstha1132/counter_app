let count='0';
const value=document.querySelector('#value');
const btns=document.querySelectorAll('.butt');
btns.forEach(function(item){
item.addEventListener('click',function(e){      //which button i click
    const showvalue= e.currentTarget.classList;// current class list kk contain garxa vanera like increase decrease
    if(showvalue.contains('decrease'))
{
count--;
}
else if(showvalue.contains('increase')){
    count++;
    }
    else
    {
        count=0;
    }
    if(count<0){
        value.style.color='red';
    }
    if(count>0){
        value.style.color='green';
    }
    value.textContent=count;
    
})
})