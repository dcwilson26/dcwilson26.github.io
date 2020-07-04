window.onload = function(){
    newGame();
}

var m = window.matchMedia("(min-width:768px)")
var l = window.matchMedia("(orientation:landscape")
m.addListener(navLinks)
l.addListener(navLinks)

function navLinks(){
    var x = document.getElementById("myLinks");
    if(m.matches){
        x.style.display = "inline-block"
        }   else if(l.matches){
            x.style.display = "inline-block"
            }   else{
                x.style.display = "none"
    }
}

function yourGuess(){
    var guess = document.getElementById("guess").value;
    var guesses = document.getElementById("output");
            
    if(isNaN(guess) || guess < 1 || guess > 100){
        document.getElementById("guess").value = "";
        alert("Please enter a number between 1 and 100");
    } else if (guess == numToGuess){
        var rows = document.getElementById("output").rows;
        document.getElementById("output").rows = rows+1;
        document.getElementById("guess").value = "";
        var numOfGuesses = rows-2;
        guesses.value = guesses.value + "\r" + numOfGuesses+".  Correct! ("+guess+")";
            if(numOfGuesses == 1){
                document.getElementById("result").innerHTML = "WOW! It took you only ";
                document.getElementById("numOfGuesses").innerHTML = numOfGuesses+" guess.";
                document.getElementById("guess").style.display = "none";
                document.getElementById("submitGuess").style.display = "none";          
            }
            else{
                document.getElementById("result").innerHTML = "Good job! It took you ";
                document.getElementById("numOfGuesses").innerHTML = numOfGuesses+" guesses.";
                document.getElementById("guess").style.display = "none";
                document.getElementById("submitGuess").style.display = "none";                
            }
    } else if (guess > numToGuess){
        var rows = document.getElementById("output").rows;
        document.getElementById("output").rows = rows+1;
        document.getElementById("guess").value = "";
        var numOfGuesses = rows-2
        guesses.value = guesses.value + "\r" + numOfGuesses+".  Lower! ("+guess+")";
        document.getElementById("numOfGuesses").innerHTML = numOfGuesses;
    } else{
        var rows = document.getElementById("output").rows;
        document.getElementById("output").rows = rows+1;
        document.getElementById("guess").value = "";
        var numOfGuesses = rows-2
        guesses.value = guesses.value + "\r" + numOfGuesses+".  Higher! ("+guess+")";
        document.getElementById("numOfGuesses").innerHTML = numOfGuesses;
    }
}
    
function newGame(){
    document.getElementById("guess").value = "";
    document.getElementById("result").innerHTML = "Number of guesses: ";
    document.getElementById("numOfGuesses").innerHTML = 0;
    document.getElementById("guess").style.display = "inline";
    document.getElementById("submitGuess").style.display = "inline";
    var guesses = document.getElementById("output");
    guesses.value = "";
    numToGuess = Math.floor(Math.random()*100) + 1;
    document.getElementById("output").rows = 3;
    guesses.value = "Your guesses:\n"
}

function hamburger() {
    var x = document.getElementById("myLinks");
    if (m.matches){
    }   else if(l.matches){
        }   else if (x.style.display === "block"){
            x.style.display = "none";
            }   else{
                x.style.display = "block";
    }
  }

var slideIndex = 1;
  
function plusSlides(n){
    showSlides(slideIndex += n);
}
  
function currentSlide(n){
    showSlides(slideIndex = n);
}
  
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

$(document).ready(function(){
    $("a").on('click', function(event) {
  
        if (this.hash !== ""){
            event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
     
        
        });
        }
    });
});
