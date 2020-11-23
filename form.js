var apiKey = 'e681bf2874fe3ac697c783447edbf3a4';

document.addEventListener('DOMContentLoaded', bindCityButton);
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
