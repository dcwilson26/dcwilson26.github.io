window.onload=function(){
    var input = document.getElementById("guess");
    input.addEventListener("keypress", function(event){
        if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("submitGuess").onclick();    
        }
    })
}

var m = window.matchMedia("(min-width:768px)")
var l = window.matchMedia("(orientation:landscape")
var xl = window.matchMedia("(min-width:992px)")
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
    if(isNaN(guess) || guess < 1 || guess > 100 || guess - Math.floor(guess) !== 0){
    document.getElementById("guess").value = "";
    alert("Please enter a whole number between 1 and 100");
    }   else if (guess == numToGuess){
        var rows = document.getElementById("output").rows;
        document.getElementById("output").rows = rows+1;
        document.getElementById("guess").value = "";
        var numOfGuesses = rows-2;
        guesses.value = guesses.value + "\r" + numOfGuesses+".  Correct! ("+Math.floor(guess)+")";
        guesses.scrollTop = guesses.scrollHeight;
            if(numOfGuesses == 1){
            document.getElementById("result").innerHTML = "WOW! It took you only ";
            document.getElementById("numOfGuesses").innerHTML = numOfGuesses+" guess.";
            document.getElementById("guessLabel").style.display = "none";
            document.getElementById("guess").style.display = "none";
            document.getElementById("submitGuess").style.display = "none";          
            }   else{
                document.getElementById("result").innerHTML = "Good job! It took you ";
                document.getElementById("numOfGuesses").innerHTML = numOfGuesses+" guesses.";
                document.getElementById("guessLabel").style.display = "none";
                document.getElementById("guess").style.display = "none";
                document.getElementById("submitGuess").style.display = "none";                
            }
    }   else if (guess > numToGuess){
        var rows = document.getElementById("output").rows;
        document.getElementById("output").rows = rows+1;
        document.getElementById("guess").value = "";
        var numOfGuesses = rows-2
        guesses.value = guesses.value + "\r" + numOfGuesses+".  Lower ("+Math.floor(guess)+")";
        guesses.scrollTop = guesses.scrollHeight;
        document.getElementById("numOfGuesses").innerHTML = numOfGuesses;
        }   else{
            var rows = document.getElementById("output").rows;
            document.getElementById("output").rows = rows+1;
            document.getElementById("guess").value = "";
            var numOfGuesses = rows-2
            guesses.value = guesses.value + "\r" + numOfGuesses+".  Higher ("+Math.floor(guess)+")";
            guesses.scrollTop = guesses.scrollHeight;
            document.getElementById("numOfGuesses").innerHTML = numOfGuesses;
    }
}
    
function newGame(){
    document.getElementById("guessLabel").style.display = "inline-block";
    document.getElementById("guessLabel").innerHTML = "Guess a number between 1 and 100";
    document.getElementById("guess").value = "";
    document.getElementById("result").innerHTML = "Number of guesses: ";
    document.getElementById("numOfGuesses").innerHTML = 0;
    document.getElementById("guess").style.display = "inline";
    document.getElementById("submitGuess").style.display = "inline";
    document.getElementById("output").style.display = "inline-block";
    var guesses = document.getElementById("output");
    guesses.value = "";
    numToGuess = Math.floor(Math.random()*100) + 1;
    document.getElementById("output").rows = 3;
    guesses.value = "Your guesses:\n";
    if(l.matches){
    document.getElementById("gameRight").style.width = "47%";
    }   else if(xl.matches){
        document.getElementById("gameRight").style.width = "47%";
        }   else{
            document.getElementById("gameRight").style.width = "100%";
            }
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
    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}
        for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        }   for(i = 0; i < dots.length; i++){
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
        }, 800);
        }
    });
});

function uclaBruins(){
    document.getElementById("ucla").src = "images/UCLABruins.jpg"    
}

function royceHall(){
    document.getElementById("ucla").src = "images/UCLA.jpg"
}

function redRockLogo(){
    document.getElementById("redRock").src = "images/RedRockLogo.jpg"
}

function redRockCasino(){
    document.getElementById("redRock").src = "images/RedRock.jpg"
}

function lasVegasStrip(){
    document.getElementById("vegas").src = "images/LasVegasStrip.jpg"
}

function lasVegasSign(){
    document.getElementById("vegas").src = "images/LasVegasSign.jpg"
}

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}