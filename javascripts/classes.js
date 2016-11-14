"use strict";
var Gauntlet = (function(Gauntlet) {

  Gauntlet.GuildHall = {};

  /*
    Base function for a player, or enemy, class (profession)
   */
  Gauntlet.GuildHall.PlayerClass = function() {
    this.name = "Beggar";
    this.healthBonus = 0;
    this.strengthBonus = 0;
    this.intelligenceBonus = 0;
    this.magical = false;

    this.toString = function() {
      return this.name;
    };
  };

  /*
      FIGHTER CLASSES
        - Warrior
        - Valkyrie
        - Berserker
        - Monk
   */
  Gauntlet.GuildHall.Fighter = function() {
    this.healthBonus = 20;
    this.strengthBonus = 10;
  };
  Gauntlet.GuildHall.Fighter.prototype = new Gauntlet.GuildHall.PlayerClass();


  Gauntlet.GuildHall.Shinobi = function() {
    this.name = "Shinobi";
    this.healthBonus = this.healthBonus + 25;
    this.strengthBonus = this.strengthBonus + 30;
  };
  Gauntlet.GuildHall.Shinobi.prototype = new Gauntlet.GuildHall.Fighter();

  Gauntlet.GuildHall.Berserker = function() {
    this.name = "Berserker";
    this.healthBonus = this.healthBonus + 35;
    this.strengthBonus = this.strengthBonus + 20;
  };
  Gauntlet.GuildHall.Berserker.prototype = new Gauntlet.GuildHall.Fighter();


  Gauntlet.GuildHall.Koga = function() {
    this.name = "Koga";
    this.healthBonus = this.healthBonus + 10;
    this.strengthBonus = this.strengthBonus + 10;
  };
  Gauntlet.GuildHall.Koga.prototype = new Gauntlet.GuildHall.Fighter();


  /*
      MAGICAL CLASSES
        - Shaman
        - Wizard
        - Conujurer
        - Sorcerer
   */
  Gauntlet.GuildHall.Mage = function() {
    this.name = "Mage";
    this.magical = true;
    this.healthBonus = this.healthBonus - 10;
    this.strengthBonus = this.strengthBonus - 20;
    this.intelligenceBonus = this.intelligenceBonus + 20;
  };
  Gauntlet.GuildHall.Mage.prototype = new Gauntlet.GuildHall.PlayerClass();


  Gauntlet.GuildHall.Shaman = function() {
    this.name = "Shaman";
    this.healthBonus = this.healthBonus + 5;
    this.strengthBonus = this.strengthBonus - 10;
    this.intelligenceBonus = this.intelligenceBonus + 20;
  };
  Gauntlet.GuildHall.Shaman.prototype = new Gauntlet.GuildHall.Mage();


  Gauntlet.GuildHall.Shinsengumi = function() {
    this.name = "Shinsengumi";
    this.healthBonus = this.healthBonus - 15;
    this.strengthBonus = this.strengthBonus - 25;
    this.intelligenceBonus = this.intelligenceBonus + 40;
  };
  Gauntlet.GuildHall.Shinsengumi.prototype = new Gauntlet.GuildHall.Mage();


  Gauntlet.GuildHall.Conjurer = function() {
    this.name = "Conjurer";
    this.strengthBonus = this.strengthBonus - 10;
    this.intelligenceBonus = this.intelligenceBonus + 10;
  };
  Gauntlet.GuildHall.Conjurer.prototype = new Gauntlet.GuildHall.Mage();


  Gauntlet.GuildHall.Sorcerer = function() {
    this.name = "Sorcerer";
    this.healthBonus = this.healthBonus - 5;
    this.strengthBonus = this.strengthBonus - 20;
    this.intelligenceBonus = this.intelligenceBonus + 30;
  };
  Gauntlet.GuildHall.Sorcerer.prototype = new Gauntlet.GuildHall.Mage();


  /*
      STEALTH CLASSES
        - Thief
        - Ninja
        - Assassin
   */
  return Gauntlet;
})(Gauntlet || {});