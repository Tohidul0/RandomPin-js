
//-------------Generate pin start here----------------------------
document.getElementById('click-button').addEventListener('click', function(){
    let m=1;
    let pin;
    while(m==1){
         pin = Math.random();
    pin = pin * 10000;
    pin = Math.round(pin);
    pin= pin +'';
    if(pin.length == 4){
     m=0;
    }

    }
    const code =document.getElementById('input-number');
    code.value = pin;
});

//-------------Generate pin end here------------------------








//------------------keyboard part start here--------------------------
document.getElementById('keyBoard').addEventListener('click', function(event){
    const number = event.target.innerText;
    const display = document.getElementById('display-num');
    let previousNum = display.value;
    if (!isNaN(number)) {
        display.value= previousNum + number;
    }
    else if( number == 'C'){
        display.value='';
    }
    
    
})

//------------keyboard part end here----------------------------------------




// --------------------matching part start here----------------------------

function matching(){
    let gnumber = document.getElementById('input-number');
    gnumber = gnumber.value;
    let knumber = document.getElementById('display-num');
    knumber = knumber.value;
    if(gnumber == knumber) {
        document.getElementById('pass').style.display = 'block';
        document.getElementById('fail').style.display = 'none';
    }
    else {
        document.getElementById('fail').style.display = 'block';
        document.getElementById('pass').style.display = 'none';
    }
}