"use strict";

var play = function () {
  var audio = document.getElementById("audio");
  audio.play("/audio/slap.mp3");
}

var play2 = function () {
  var audio = document.getElementById("audio2");
  audio.play("/audio/vo_anno_you_suck.wav");
}


var play3 = function () {
  var audio = document.getElementById("audio3");
  audio.play("/audio/Cheering%202-SoundBible.com-457490617.mp3");
}

function play4() {
  var audio = document.getElementById("audio4");
  audio.play("/audio/vo_anno_fight01.wav");
} 

$(document).ready(function() {
  $("#my_audio").get(0).play();

});

function setHalfVolume() {
  var myAudio = document.getElementById("my_audio");
  myAudio.volume = 0.5; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
}


$('.seizure').on('click', function(e) {
  $('#messageArea').addClass('nick');
  var millisecondsToWait = 100;
  setTimeout(function() {
    $('#messageArea').removeClass('nick');
  }, millisecondsToWait);

});
