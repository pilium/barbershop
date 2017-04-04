
var link = document.querySelector(".enter");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".close");
var map_link = document.querySelector(".map-show");
var map = document.querySelector(".map");
var login = popup.querySelector("[name=login]");
var pass = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");
var close_map = map.querySelector(".close-map");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});
close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-show");
});

map_link.addEventListener("click", function (event){
  event.preventDefault();
  map.classList.add("map-show");
})
close_map.addEventListener("click", function(event){
  event.preventDefault();
  map.classList.remove("map-show");
})

form.addEventListener("submit", function (event) {
  if (!login.value || !pass.value) {
    event.preventDefault();
  }else {
    localStorage.setItem("login", login.value);
  }
});
window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});
window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
      if (map.classList.contains("map-show")) {
          map.classList.remove("map-show");
      }
    }
});
function initMap() {
  var myLatLng = {lat: 45.056853, lng: 38.944155};

  var map = new google.maps.Map(document.querySelector('.map-script'), {
    zoom: 15,
    center: myLatLng
  });
  var image = 'img/map-marker.png';
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
  });
}
