var apiKey = 'e681bf2874fe3ac697c783447edbf3a4';

document.addEventListener('DOMContentLoaded', bindCityButton);
document.addEventListener('DOMContentLoaded', getDog);
//
// function bindCityButton(){
//   document.getElementById('city_name_Submit').addEventListener('click', function(event){
//     var req = new XMLHttpRequest();
//     var breed_name = document.getElementById('city_name').value;
//   //  req.open("GET","http://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&appid=" + apiKey, true);
//     req.open("GET","https://dog.ceo/api/breed/hound/images" + breed_name, true)
//     req.addEventListener('load', function(){
//       if(req.status >= 200 && req.status < 400){
//         var response = JSON.parse(req.responseText);
//         document.getElementById('breeds').textContent = JSON.stringify(response);
//       }else{
//         console.log("I need help!" + req.statusText);
//       }
//     });
//     req.send(null);
//     event.preventDefault();
//   })
// }

function bindCityButton(){
  document.getElementById('city_name_Submit').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var city_name = document.getElementById('city_name').value;
    req.open("GET","http://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&appid=" + apiKey, true);
    req.addEventListener('load', function(){
      if(req.status >= 200 && req.status < 400){
        var response = JSON.parse(req.responseText);
        document.getElementById('coordinates').textContent = JSON.stringify(response);
      }else{
        console.log("I need help!" + req.statusText);
      }
    });
    req.send(null);
    event.preventDefault();
  })
}

function getDog(){
  document.getElementById('get-dog').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var url = "https://dog.ceo/api/breeds/image/random";
    req.open("GET", url, true);
    req.addEventListener('load', function(){
      if(req.status >= 200 && req.status < 400){
        var response = JSON.parse(req.responseText);
        var dogDiv = document.getElementById('demo-image');
      //  document.dogDiv.textContent = JSON.stringify(response.message);
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
        //
        //     $.getJSON("https://dog.ceo/api/breeds/image/random", function( data ) {
        //         $(".breeds-image-random pre").html(JSON.stringify(data, null, 4));
        //         $(".image-content").html("<img src='" + data.message + "'>");
        //     });
        // }
        //
        //
        // $('.get-dog').click(function(){
        //     getDog();
        // });
        //
        //
        // $(document).ready(function() {
        //     getDog();
        // });


// function bindDogButton(){
//   document.getElementById('dog_Submit').addEventListener('click', function(event){
//     var req = new XMLHttpRequest();
//     var dog = document.getElementById('dog').value;
//     req.open("GET","https://dog.ceo/api/breed/?q=" + dog + "/images/random", true);
//     req.addEventListener('load', function(){
//       if(req.status >= 200 && req.status < 400){
//         var response = JSON.parse(req.responseText);
//         document.getElementById('coordinates').textContent = JSON.stringify(response);
//       }else{
//         console.log("I need help!" + req.statusText);
//       }
//     });
//     req.send(null);
//     event.preventDefault();
//   })
// }



// function getDog(){
//     var selectedDog = $(".dog-selector option:selected").val();
//         dogURL = selectedDog.replace(/-/g, '/');
//
//     $.getJSON( "https://dog.ceo/api/breed/" + dogURL +"/images/random", function( result ) {
//         $(".demo-image").html("<img src='" + result.message + "'>");
//     });
// }
//
// function loadDogs(){
//     $.getJSON( "https://dog.ceo/api/breeds/list/all", function( result ) {
//         var breeds = result.message;
//             firstDog = Object.keys(breeds)[0];
//
//         // $.each(breeds, function(dog,breed){
//         //
//         //    // if they have a sub breed
//         //     if (breeds[dog].length >= 1) {
//         //         for (i = 0; i < breeds[dog].length; i++) {
//         //             $(".dog-selector").append('<option value="' + dog + '-'+ breeds[dog][i] +'">'+ breeds[dog][i] + ' '+ dog +'</option>');
//         //         }
//         //     }
//         //
//         //     // no sub breed
//         //     else if (breeds[dog].length < 1 ) {
//         //         // make the selector
//         //         $(".dog-selector").append('<option value="' + dog + '">' + dog + '</option>');
//         //     }
//         // });
//
//         $.getJSON( "https://dog.ceo/api/breed/" + firstDog +"/images/random", function( result ) {
//             $(".demo-image").html("<img src='" + result.message + "'>");
//         });
//     });
// }
//
// $(".dog-selector").change(function(){
//     $(".dog-selector option:selected" ).each(function() {
//         getDog();
//     });
// });
//
// $(".get-dog").click(function(){
//     getDog();
// });
//
// $(document).ready(function(){
//     loadDogs();
// });
