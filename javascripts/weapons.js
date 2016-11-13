"use strict";

var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  };
};

var throwingStar = function() {
  this.name = "Throwing Star";
  this.damage = 9;
  this.hands = 1;
};
throwingStar.prototype = new Weapon();

var nightBlade= function() {
  this.name = "Night Blade";
  this.damage = 17;
  this.hands = 2;
};
nightBlade.prototype = new Weapon();

var dualBlades= function() {
  this.name = "Dual Blades";
  this.damage =19 ;
  this.hands = 2;
};
dualBlades.prototype = new Weapon();
