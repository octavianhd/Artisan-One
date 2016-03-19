//google maps
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ro_RO/sdk.js#xfbml=1&version=v2.3";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
var myCenter=new google.maps.LatLng(47.07335,21.91903);
function initialize() {
  var mapProp = {
    center:myCenter,
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var marker=new google.maps.Marker({
   position:myCenter,
  });
  marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

//Formularul de pe pagina de programare

$(document).ready(function(){
  $("#finalButton").click(function(){
    var progName = $("#name").val();
    var progDate = $("#date").val();
    $("#prog_form").hide();
    $("#divProg").fadeIn(2000);
    $("#date_in").append(progDate);
    $("#name_in").append(progName);
  });
});

//Pager

var app = angular.module('myApp',[]);
app.directive('pagerIn',function(){
  return{
    restrict: 'E',
    templateUrl: 'template/template.html #pagerDiv'
  }
});
