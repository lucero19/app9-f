// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready", onDeviceReady,false);	
});

function onDeviceReady() {
 $('#posicion').on('click',function(){
 	getPosition();
});
 $('#watch').on('click',function(){
 	watchPosition();
});
}

function getPosition(){
 var options={
      enableHighAccuracy :true,      
      maximumAge:3600000 
 	}

var watchID=navigator.geolocation.getCurrentPosition(onSuccess,onError,options);
function onSuccess(postion){

  alert('Latitude:'+postion.coords.latitude+'\n'+
  	  'Longitude:'+postion.coords.longitude+'\n'+
  	    'Altitude:'+postion.coords.altitude+'\n'+
  	    'Accuracy:'+postion.coords.accuracy+'\n'+
  	    'Altitude Accuracy:'+postion.coords.altitudeAccuracy+'\n'+
          'Heading:'+postion.coords.heading+'\n'+
  	          'Speed:'+postion.coords.speed+'\n'+
  	  'Timestamp'+postion.coords.timestamp+'\n');

};


function onError(error){
	alert('code:'+error.code+'\n'+'message:'+error.message+'\n');
                        }
}

function watchPosition(){
	var options={
      maximumAge: 36000000,
      timeout: 3000,
      enableHighAccuracy :true, 
}

var watchID=navigator.geolocation.watchPosition(onSuccess,onError,options);
function onSuccess(postion) {
	$('#latitud').html(postion.coords.latitude);
	$('#longitud').html(postion.coords.longitude);
	$('#altitud').html(postion.coords.altitude);
    $('#accuracy').html(postion.coords.accuracy);
	$('#aaccuracy').html(postion.coords.altitudeAccuracy);
	$('#headingg').html(postion.coords.heading);
	$('#speed').html(postion.coords.speed);
	$('#timestamp').html(postion.coords.timestamp);

};

function onError(error){
 alert('code:'+error.code+'\n'+'message:'+error.message+'\n');
    }
}