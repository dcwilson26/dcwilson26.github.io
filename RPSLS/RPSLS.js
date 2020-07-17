var x = window.matchMedia("(min-width: 1200px)")
var sm = ["122,40,40","41,102,40","210,102,40","72,202,40","177,202,40"]
var lg = ["245,80,80","83,204,80","421,204,80","144,405,80","354,405,80"]
var pick = ["Scissors","Spock","Paper","Lizard","Rock"]
media(x)
x.addListener(media)

function media(x) {
    if (x.matches) {
        document.getElementById(pick[0]).coords=lg[0];
        document.getElementById(pick[1]).coords=lg[1];
        document.getElementById(pick[2]).coords=lg[2];
        document.getElementById(pick[3]).coords=lg[3];
        document.getElementById(pick[4]).coords=lg[4];
    }   else{
            document.getElementById(pick[0]).coords=sm[0];
            document.getElementById(pick[1]).coords=sm[1];
            document.getElementById(pick[2]).coords=sm[2];
            document.getElementById(pick[3]).coords=sm[3];
            document.getElementById(pick[4]).coords=sm[4];
    }
}

var w = 0;
var l = 0;
var t = 0;

function shoot(g){
    var s = Math.floor(Math.random()*5)+1;    
    var color = ["#e480ff","#80b3ff","#ffdd54","#86de86","#ff8080"];   
    document.getElementById("sheldon").innerHTML=pick[s-1];
    document.getElementById("sheldon").style.color=color[s-1];
    document.getElementById("you").innerHTML=pick[g-1];
    document.getElementById("you").style.color=color[g-1];
    if(s==g){
        document.getElementById("result").innerHTML="Tie";
        document.getElementById("result").style.color="#ffdd54";
        t++;
        document.getElementById("ties").innerHTML=t;
        }else if((g==1 && (s==2 || s==5)) || (g==2 && (s==3 || s==4)) || (g==3 && (s==1 || s==4)) || (g==4 && (s==1 || s==5)) || (g==5 && (s==2 || s==3))){
            document.getElementById("result").innerHTML="You Lose";
            document.getElementById("result").style.color="#ff8080";
            l++;
            document.getElementById("losses").innerHTML=l;
        }else{
            document.getElementById("result").innerHTML="You Win";
            document.getElementById("result").style.color="#86de86";
            w++;
            document.getElementById("wins").innerHTML=w;
        }        
}

function reset(){
    document.getElementById("result").innerHTML="";
    document.getElementById("sheldon").innerHTML="";
    document.getElementById("you").innerHTML="";
    document.getElementById("wins").innerHTML=0;
    document.getElementById("losses").innerHTML=0;
    document.getElementById("ties").innerHTML=0;
    w = 0;
    l = 0;
    t = 0;
}