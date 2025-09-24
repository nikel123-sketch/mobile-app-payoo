// home javascript


// add money js----------------

document.getElementById('btn').addEventListener('click',function(e){
    e.preventDefault()

    const bank=document.getElementById('bank').value;

    const accountnumber=parseInt(document.getElementById('accountnumber').value)

    const amount=parseInt(document.getElementById('amount').value)

    const pinnumber=parseInt(document.getElementById('pinnumber').value)

    const available=parseInt(document.getElementById('available').innerText)

    const usepin=1234;
    const useabank=123456789;

    if(accountnumber!==useabank){
        alert('invalid bank number')
        return;

    }

    if(pinnumber!==usepin){
        alert('invalid pin number')
        return;
    }

    

    const totall=available+amount;
    
    document.getElementById('available').innerText=totall;
    document.getElementById('amount').value='';

    document.getElementById('accountnumber').value='';

    document.getElementById('pinnumber').value='';
})


// toglin-----------

// addmoney----
document.getElementById('btn1').addEventListener('click',function(){
    const forms=document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display='none'
    }
    document.getElementById('addmaney').style.display='block'
    
})

// cashout-----------
document.getElementById('btn2').addEventListener('click',function(){
    const forms=document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display='none'
    }
    document.getElementById('cashout').style.display='block'
    

})

// teansfer----
document.getElementById('btn3').addEventListener('click',function(){
    const forms=document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display='none'
    }
    document.getElementById('transfer').style.display='block'

})

// get bonus----
document.getElementById('btn4').addEventListener('click',function(){
    const forms=document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display='none'
    }
    document.getElementById('get').style.display='block'

})



// cashout js------

document.getElementById('c-btn').addEventListener('click',function(e){
    e.preventDefault()

    const agent=parseInt(document.getElementById('agentnumber').value)
    console.log('ok')

    const withdrawamount=parseInt(document.getElementById('withdrawamount').value)

    const withdrawpin=parseInt(document.getElementById('withdrawpin').value)

    const available=document.getElementById('available').innerText;
    console.log(available)

    // start---

    const useragentnumber=12345;
    const userpinnumber=1234;

    if(agent!==useragentnumber){
        alert('invalid agent number number')
        return;
    }
    if(withdrawpin!==userpinnumber){
        alert('invalid pin number')
        return;
    }

    const newtotal=available-withdrawamount;
    document.getElementById('available').innerText=newtotal;



    document.getElementById('agentnumber').value='';
    document.getElementById('withdrawamount').value='';
    document.getElementById('withdrawpin').value='';



    

})
