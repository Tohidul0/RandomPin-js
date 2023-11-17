
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
     console.log(pin);
     m=0;
    }

    }
    const code =document.getElementById('input-number');
    code.value = pin;
});

//-------------Generate pin end here------------------------