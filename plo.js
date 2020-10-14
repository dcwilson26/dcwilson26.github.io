var pot = 5
var newPot = 0
var previous = 0
var maxPot = 15
var bet = 0

var input = document.getElementById("bet");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById("submit").click();   
    }
});

function submitBet(){    
    var list = document.createElement("li");
    bet = document.getElementById("bet").value;
    if(bet>maxPot || bet<5 || bet!=Math.floor(bet)){
        alert("Invalid bet amount");
        document.getElementById("bet").value = null;
    }   else{
    newPot = +pot + +previous;
    maxPot = (+bet * 3) + +newPot;    
    document.getElementById("pot").innerHTML = maxPot;
    list.innerHTML = bet;
    document.getElementById("list").appendChild(list);    
    document.getElementById("bet").value = null;  
    pot = newPot;
    previous = bet;    
}}   

function reset(){
    document.getElementById("pot").innerHTML = 15;
    var lis = document.querySelectorAll("#list li");
    for(var i=0; li=lis[i]; i++) {
    li.parentNode.removeChild(li);
    }
    pot = 5;
    newPot = 0;
    previous = 0;
    maxPot = 15;
    bet = 0;
}