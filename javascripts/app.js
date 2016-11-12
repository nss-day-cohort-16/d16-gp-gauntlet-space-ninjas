"use strict";
var Gauntlet = (function(Gauntlet) {
  /*
    Test code to generate a human player and an orc player
   */
  // var warrior = new Gauntlet.Combatants.Human();
  // warrior.setWeapon(new WarAxe());
  // warrior.generateClass(); // This will be used for "Surprise me" option
  // console.log(warrior.toString());

//---------------- BAD GUY --------------------//
  var orc = new Gauntlet.Combatants.Orc();
  orc.generateClass();
  orc.setWeapon(new BroadSword());
  // console.log(orc.toString());

  /*
    Test code to generate a spell
   */

//---------------CHARACTER OBJECT----------------//
  var newPlay = new Gauntlet.Combatants.Human();

//-------------------------- ADD CLASS -----------------------------//
  $(".classRow").click( function(event) {
    var idValue = event.target.id;
    // newPlay.setClass(idValue);
    // console.log("id", idValue);
   switch (idValue) {
      case "Warrior":
      newPlay.class = new Gauntlet.GuildHall.Warrior();
      console.log("newPlay-Case: Warrior", newPlay);
      // newPlay.class = Gauntlet.GuildHall.allowedClasses[0];
        break;
      case "Wizard":
      newPlay.class = new Gauntlet.GuildHall.Wizard();
      console.log("newPlay-Case: Wizard", newPlay);
        break;
      case "Thief":
      newPlay.class = new Gauntlet.GuildHall.Thief();
      console.log("newPlay-Case: Thief", newPlay);
      // newPlay.class = Gauntlet.GuildHall.allowedClasses[Warrior];
        break;
    };
  });

//------------------------------ ADD WEAPON ----------------------------------//
  $(".weaponDiv").click( function(event) {
    var idValue = event.target.id;
    // newPlay.setWeapon(idValue);
     switch (idValue) {
      case "Dagger":
      newPlay.weapon = new Dagger();
      console.log("newPlay-Case: Dagger", newPlay);
      // newPlay.setWeapon(new Dagger());
        break;
      case "Broad Sword":
      newPlay.weapon = new BroadSword();
      console.log("newPlay-Case: BSword", newPlay);
      // newPlay.setWeapon(new BroadSword());
        break;
      case "War-Axe":
      newPlay.weapon = new WarAxe();
      console.log("newPlay-Case: War-Axe", newPlay);
        break;
    };
  });

//------------------------------- SPELL STUFF ------------------------------------//

  var spell = new Gauntlet.SpellBook.Sphere();
  // console.log("spell: ", spell.toString());
  // console.log("Gauntlet: ", Gauntlet);

    var spell = new Gauntlet.SpellBook.Sphere();
    // console.log("spell: ", spell.toString());
    // console.log("Gauntlet: ", Gauntlet);


//------------------------------ SHOW PAGES - CLICK TO NEXT PAGE -----------------------------//
  $(document).ready(function() {
    /*
      Show the initial view that accepts player name
     */
    $("#player-setup").show();


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
      console.log("newPlay Value when next page btn click", newPlay);

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
