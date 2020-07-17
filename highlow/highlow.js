var n = 0
var g = 0
var l = 0
var min = 1
var max = 2
var d = 0

function game(x){
    $("header").fadeOut(1000);
    $("main").delay(1000).fadeIn(1000);
    document.getElementById("label").innerHTML="Guess a number between 1 and "+formatNumber(x)+":";
    n = Math.floor(Math.random()*x)+1;    
    max = x;
    d = x;
}

function newGame(){
    var listItems = document.getElementById("list");
    var li = document.getElementsByTagName("li").length;
    if(listItems.hasChildNodes()){  
        for(i = li; i>0; i--){        
            listItems.removeChild(listItems.childNodes[i]);
        }
    }   
    n = Math.floor(Math.random()*d)+1;
    g = 0;
    l = 0;
    min = 1;
    max = d;    
    document.getElementById("guesses").innerHTML=null;
    document.getElementById("result").innerHTML=null;
    document.getElementById("label").innerHTML="Guess a number between 1 and "+formatNumber(d)+":";
}

var input = document.getElementById("guess");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById("submit").click();   
    }
});

function submitGuess(){    
    g = document.getElementById("guess").value;
    var list = document.createElement("li");
    if(g<min || g>max || Math.floor(g)!=g){
        alert("Please type a whole number between "+formatNumber(min)+" and "+formatNumber(max));
        document.getElementById("guess").value=null;
    }   else if(g==n){
            document.getElementById("result").innerHTML="Correct";
            l++;
            document.getElementById("guesses").innerHTML=l;
            list.innerHTML="Correct! ("+formatNumber(Math.floor(g))+")";
            document.getElementById("list").appendChild(list);
            document.getElementById("guess").value=null;
        }   else if(g<n){
                document.getElementById("result").innerHTML="Higher";
                l++;
                min = Math.floor(g)+1;                
                document.getElementById("guesses").innerHTML=l;
                list.innerHTML="Higher ("+formatNumber(Math.floor(g))+")";
                if(min!=max){
                    document.getElementById("label").innerHTML="Guess a number between "+formatNumber(min)+" and "+formatNumber(max)+":";
                }   else{
                        document.getElementById("label").innerHTML="The number has to be "+formatNumber(min)+". Type it in!";
                    }
                document.getElementById("list").appendChild(list);
                document.getElementById("guess").value=null;          
            }   else{
                    document.getElementById("result").innerHTML="Lower";
                    l++;
                    max = Math.floor(g)-1;                    
                    document.getElementById("guesses").innerHTML=l;
                    list.innerHTML="Lower ("+formatNumber(Math.floor(g))+")";
                    if(min!=max){
                        document.getElementById("label").innerHTML="Guess a number between "+formatNumber(min)+" and "+formatNumber(max)+":";
                    }   else{
                            document.getElementById("label").innerHTML="The number has to be "+formatNumber(min)+". Type it in!";
                        }                    
                    document.getElementById("list").appendChild(list);
                    document.getElementById("guess").value=null;
                }
}

function formatNumber(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}