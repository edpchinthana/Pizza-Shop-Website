//Listeners for radio buttons
var inputs=document.querySelectorAll("input[type=radio]"),
    x=inputs.length;
while(x--)
    inputs[x].addEventListener("change",function(){
        handleRadioButtons(this.name,this.value);
    },0);

function handleRadioButtons(type, value){
    if(type=="pay"){
        if(value=="yes"){
            document.getElementById("paymentInfo").classList.add('hide-form');
        }else{
            document.getElementById("paymentInfo").classList.remove('hide-form');
        }
    }else if(type=="type"){
        if(value=="yes"){
            document.getElementById("deliveryInfo").classList.add('hide-form');
        }else{
            document.getElementById("deliveryInfo").classList.remove('hide-form');
        }
    }else{
        if(value=="yes"){
            document.getElementById("address2").value = document.getElementById("address1").value;
            document.getElementById("suburb2").value = document.getElementById("suburb1").value;
            document.getElementById("postalcode2").value = document.getElementById("postalcode1").value;
        }else{
            document.getElementById("address2").value = "";
            document.getElementById("suburb2").value = "";
            document.getElementById("postalcode2").value = "";
        }
    }
}

