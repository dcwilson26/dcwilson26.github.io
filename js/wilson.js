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

function redRockLogo(){
    document.getElementById("redRock").src = "images/RedRockLogo.jpg";
    document.getElementById("redRock").alt = "Red Rock Logo"
}

function redRockCasino(){
    document.getElementById("redRock").src = "images/RedRock.jpg";
    document.getElementById("redRock").alt = "Red Rock Casino entrance"
}

function uclaBruins(){
    document.getElementById("ucla").src = "images/UCLABruins.jpg";
    document.getElementById("ucla").alt = "UCLA Bruins Logo"
}

function royceHall(){
    document.getElementById("ucla").src = "images/UCLA.jpg";
    document.getElementById("ucla").alt = "Royce Hall at UCLA"
}

function lasVegasStrip(){
    document.getElementById("vegas").src = "images/LasVegasStrip.jpg";
    document.getElementById("vegas").alt = "Night view of the Las Vegas Strip"
}

function lasVegasSign(){
    document.getElementById("vegas").src = "images/LasVegasSign.jpg";
    document.getElementById("vegas").alt = "The famous Las Vegas Sign"
}

function initMap() {
    var myLatLng = {lat: 36.202785, lng: -115.270126};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: myLatLng
    });
    var marker = new google.maps.Marker({
    position: myLatLng,    
    title: "South Shores, Las Vegas"
    });
    marker.setMap(map);
}