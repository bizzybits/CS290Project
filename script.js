//carousel js, css and html   adapted from https://markus.oberlehner.net/ and w3schools
var slideIndex = 1;
showSlides();
var myTimer;
var slideshowContainer;

window.addEventListener("load", function(){
  showSlides(slideIndex);
  myTimes = setInterval(function(){plusSlides(1)}, 4000);
})

showSlides(slideIndex);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//this is the prev and back arrows
function plusSlides(n) {
  //showSlides(slideIndex += n);
  clearInterval(myTimer);
  if(n < 0){
    showSlides(slideIndex -= 1);
  }else{
    showSlides(slideIndex += 1);
  }
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  }else{
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n+1)}, 4000);
  showSlides(slideIndex = n);
}
