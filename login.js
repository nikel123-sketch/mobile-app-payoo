// login-----

document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault()
    
    const usernumber=01301826703;
    const userpinnumber=1234;

    const mobilenumber=document.getElementById('number').value;
    const mobile=parseInt(mobilenumber)
    
    const pinnumber=document.getElementById('pin').value;
    const pin=parseInt(pinnumber);
    
    if(usernumber===mobile &&userpinnumber===pin){
        window.location.href='./home.html'
    }
    else{
        alert('invalid number or pin number')
        
    }

})