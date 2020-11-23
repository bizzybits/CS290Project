
document.addEventListener('DOMContentLoaded', getDog);

function getDog(){
  document.getElementById('get-dog').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var url = "https://dog.ceo/api/breeds/image/random";
    req.open("GET", url, true);
    req.addEventListener('load', function(){
      if(req.status >= 200 && req.status < 400){
        var response = JSON.parse(req.responseText);
        var dogDiv = document.getElementById('demo-image');
        var dogPhoto = document.createElement("img");
        dogPhoto.src = response.message;
        dogDiv.appendChild(dogPhoto);
      }else{
        console.log("I need help!" + req.statusText);
      }
    });
    req.send(null);
    event.preventDefault();
  })
}
