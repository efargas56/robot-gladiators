var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerHealth, playerAttack);

var enemyName = "roborto";
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyName, enemyHealth, enemyAttack);
var fight = function(){
// Alert players that they are starting the round

window.alert("Welcome to Robot Gladiators!");
var promptFight = window.prompt("would you like to attack? or skip turn? Enter 'FIGHT' or 'SKIP' to choose.")
// if player choses to fight, then fight
if  (promptFight === "fight" || promptFight === "FIGHT") {
//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;
// Log a resulting message to the console so we know that it worked.
console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
// check enemy's health
if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
} 
else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;
// Log a resulting message to the console so we know that it worked.
console.log(
  playerName + " was attacked by" + enemyName + "." + playerName + " now has" + playerHealth + " health remaining"
);
// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}
}
else if (promptFight === "SKIP" || promptFight === "skip"){
// confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  if(confirmSkip) {
  window.alert(playerName + " has chosen to skip the fight!");
// subtract money from playerMoney for skipping
  playerMoney - 2;
  }
    // if no (false), ask question again by running fight() again
  else {
      fight();
  }
}



else {
  window.alert("you need to choose a valid option. Try Again!")
}
}

 fight();