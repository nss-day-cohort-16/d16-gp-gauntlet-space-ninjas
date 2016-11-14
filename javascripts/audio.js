"use strict";

function play() {
  var audio = document.getElementById("audio");
  audio.play("/audio/slap.mp3");
}

function play2() {
  var audio = document.getElementById("audio2");
  audio.play("/audio/vo_anno_you_suck.wav");
}


function play3() {
  var audio = document.getElementById("audio3");
  audio.play("/audio/Cheering%202-SoundBible.com-457490617.mp3");
}

$(document).ready(function() {
  $("#my_audio").get(0).play();

});

function setHalfVolume() {
  var myAudio = document.getElementById("my_audio");
  myAudio.volume = 0.1; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
}
