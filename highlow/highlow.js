var n = 0
var g = 0
var l = 0
var min = 1
var max = 2
var d = 0
var winning = ["Mickey.gif","Office.gif","Gorilla.gif","Charlie.gif","Simon.gif","Wolf.gif","Puppy.gif","Chuck.gif","Friends.gif","GoodJob.gif","Obama.gif","Modern.gif","Joker.gif","Dogs.gif","Will.gif","Tina.gif","Minions.gif","Ace.gif","Cookie.gif","Heidi.gif","Borat.gif","Fireworks.gif","Shia.gif"]
var arrayLength = winning.length-1
var level = "Null"

function game(x){
    $("header").fadeOut(1000);
    $("main").delay(1000).fadeIn(1000);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if(x==10){
        document.getElementById("level").innerHTML="Easy (1-10)";
    }   else if(x==100){
            document.getElementById("level").innerHTML="Medium (1-100)";
        }   else if(x==1000){
                document.getElementById("level").innerHTML="Hard (1-1,000)";
            }   else if(x==10000){
                    document.getElementById("level").innerHTML="Very Hard (1-10,000)";
                }   else if(x==100000){
                        document.getElementById("level").innerHTML="Extreme (1-100,000)";                        
                    }   else{
                            document.getElementById("level").innerHTML="Insane (1-1,000,000)";}
    level = document.getElementById("level").innerHTML
    document.getElementById("label").innerHTML="Guess a number between 1 and "+formatNumber(x)+":";
    n = Math.floor(Math.random()*x)+1; 
    g = 0;
    l = 0; 
    min = 1;  
    max = x;
    d = x;      
    var listItems = document.getElementById("list");
    var li = document.getElementsByTagName("li").length;    
    if(listItems.hasChildNodes()){  
        for(i = li; i>0; i--){        
            listItems.removeChild(listItems.childNodes[i]);
        }
    }       
    $("#winReset").fadeOut(500);
    $("#winImage").fadeOut(500);
    document.getElementById("left").style.display="inline-block";     
    document.getElementById("guesses").innerHTML=null;
    document.getElementById("result").innerHTML=null;
}

function mainMenu(){
    $("main").fadeOut(1000);
    $("header").delay(1000).fadeIn(1000);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    n = 0;
    g = 0;
    l = 0;
    min = 1;
    max = 2;
    document.getElementById("guesses").innerHTML=null;
    document.getElementById("result").innerHTML=null;
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
    $("#winReset").fadeOut(500);
    $("#winImage").fadeOut(500);
    document.getElementById("level").innerHTML=level;
    document.getElementById("left").style.display="inline-block";        
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
    document.getElementById("winImage").src="";
    g = document.getElementById("guess").value;
    var list = document.createElement("li");
    if(g<min || g>max || Math.floor(g)!=g){
        alert("Please type a whole number between "+formatNumber(min)+" and "+formatNumber(max));
        document.getElementById("guess").value=null;
    }   else if(g==n){
            document.getElementById("result").innerHTML="Correct! ("+formatNumber(Math.floor(g))+")";
            l++;
            document.getElementById("guesses").innerHTML=l;
            list.innerHTML="Correct! ("+formatNumber(Math.floor(g))+")";
            document.getElementById("list").appendChild(list);
            document.getElementById("list").scrollTop = document.getElementById("list").scrollHeight;
            document.getElementById("left").style.display="none";            
            var randImg = Math.floor(Math.random()*arrayLength);
            document.getElementById("winImage").src=winning[randImg];
            document.getElementById("winReset").style.display="Inline-block";
            $("#winImage").fadeIn(500);          
            document.getElementById("guess").value=null;
        }   else if(g<n){
                document.getElementById("result").innerHTML="Higher ("+formatNumber(Math.floor(g))+")";
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
                document.getElementById("list").scrollTop = document.getElementById("list").scrollHeight;
                document.getElementById("guess").value=null;          
            }   else{
                    document.getElementById("result").innerHTML="Lower ("+formatNumber(Math.floor(g))+")";
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
                    document.getElementById("list").scrollTop = document.getElementById("list").scrollHeight;
                    document.getElementById("guess").value=null;
                }
}

function formatNumber(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}