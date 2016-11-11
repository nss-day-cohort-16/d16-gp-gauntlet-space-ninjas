"use strict";
var Gauntlet = (function(Gauntlet) {
  /*
    Test code to generate a human player and an orc player
   */
  // var warrior = new Gauntlet.Combatants.Human();
  // warrior.setWeapon(new WarAxe());
  // warrior.generateClass(); // This will be used for "Surprise me" option
  // console.log(warrior.toString());


  // var orc = new Gauntlet.Combatants.Orc();
  // orc.generateClass();
  // orc.setWeapon(new BroadSword());
  // console.log(orc.toString());

  /*
    Test code to generate a spell
   */
  
  var newPlay = new Gauntlet.Combatants.Player();

///////////////////////////////--- EVENT LISTENERS --/////////////////////////////////
  $(".Warrior").click( function(event) {
    newPlay.setClass(event.target.id);
    // var idValue = event.target.id;
    // console.log("id", event.target.id);
    // console.log("newPlay Case 1", newPlay);
    // newPlay = Gauntlet.Guildhall.idValue();
  });

  $(".weaponDiv").click( function(event) {
    newPlay.setWeapon(event.target.id);
    // var classId = event.target.id;
    // console.log("id", event.target.id);
    // console.log("newPlay Case 1", newPlay);
  });

  var spell = new Gauntlet.SpellBook.Sphere();
  console.log("spell: ", spell.toString());
  console.log("Gauntlet: ", Gauntlet);

  $(document).ready(function() {
    /*
      Show the initial view that accepts player name
     */
    $("#player-setup").show();

    /*
      Test code to generate a human player and an orc player
     */
    var warrior = new Gauntlet.Combatants.Human();
    warrior.setWeapon(new WarAxe());
    warrior.generateClass(); // This will be used for "Surprise me" option
    console.log(warrior.toString());
    console.log("warrior: ", warrior);

    var orc = new Gauntlet.Combatants.Orc();
    orc.generateClass();
    orc.setWeapon(new BroadSword());
    console.log(orc.toString());
    console.log("orc: ", orc);
    /*
      Test code to generate a spell
     */
    var spell = new Gauntlet.SpellBook.Sphere();
    console.log("spell: ", spell.toString());
    console.log("Gauntlet: ", Gauntlet);


    /*
      When any button with card__link class is clicked,
      move on to the next view.
     */
    $(".card__link").click(function(e) {
      var nextCard = $(this).attr("next");
      var moveAlong = false;

      switch (nextCard) {
        case "card--class":
        newPlay.playerName = $("#checkout").val();
          moveAlong = ($("#player-name").val() !== "");
          break;
        case "card--weapon":
          moveAlong = ($("#player-name").val() !== "");
          break;
        case "card--battleground":
          moveAlong = ($("#player-name").val() !== "");
          break;
      }
      console.log("newPlay", newPlay);

      if (moveAlong) {
        $(".card").hide();
        $("." + nextCard).show();
      }
    });

    /*
      When the back button clicked, move back a view
     */
    $(".card__back").click(function(e) {
      var previousCard = $(this).attr("previous");
      $(".card").hide();
      $("." + previousCard).show();
    });

  });
  return Gauntlet

})(Gauntlet || {});
