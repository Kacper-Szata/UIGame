//all of the script is used in pageLoaded for the reason that when HTML turns on then the pageloaded script turns on javascript
function pageLoaded()
{
//gameobject variables for enemy and player, (isAI) is for the enemy
function GameObject(isAI)
{
    this.stickman= new Image();
    this.stickman.src="./IMG/REGULAR_stickman.png";
    this.face=new Image();
    this.face.src="./IMG/EMPTY_stickman.png";
    this.health= 100;
    this.isAI=isAI;
    this.play="";
}
//variables created for player and enemy to hold the gameobject variables
var player= new GameObject(false);
var enemy= new GameObject(true);

//image object connecting the images
function ImageObject(link)
{
    this.image = new Image();
    this.image.src=link;
}
//variables created to hold the images in imageobject
var fire =new ImageObject("./IMG/FIRE_stickman.png");
var air = new ImageObject("./IMG/AIR_stickman.png");
var water = new ImageObject("./IMG/WATER_stickman.png");
var earth = new ImageObject("./IMG/EARTH_stickman.png");
//variable for the canvas 
var context = document.getElementById("game").getContext("2d");
//variable created for enemy random element chance
var elementChance = 4;
//a true or false variable to decide if the game ended 
var gameEnd = false;

//timer stuff from my previous script unfortunetly its not used because not enough time
//const startingMinutes= 10;
//let time = startingMinutes * 60;
//var timer = 0;
//const countdownEl = document.getElementById("countdown");
//setInterval(updateCountdown, 1000);
//var timerEnd = false;

//eventlistener for buttons, it gets the buttons from html to be used in the game itself
document.getElementById("FIRE").addEventListener('click',roundEditor);
document.getElementById("AIR").addEventListener('click',roundEditor);
document.getElementById("WATER").addEventListener('click',roundEditor);
document.getElementById("EARTH").addEventListener('click',roundEditor);
document.getElementById("RESTART").addEventListener('click',init);


//this function is responsible for starting and working during the round it updates health and status of player and enemy
function roundEditor()
{
    //"this" shows what player chooses
    console.log(this.id);
    player.play = this.id;
    enemyElement();
    healthBar();
}
//function responsible for dictating when the game is ending
function endGame()
{
  
  if (player.health == 0)
  {
    
      context.fillText("You Lose!",865,200);
      gameEnd = true;
  }
  else if (enemy.health == 0)
  {
    
    context.fillText("You Win!",865,200);
    gameEnd = true;
  }
  //for else you never have to write a condition, YOU GET AN ERROR IF YOU WRITE SOMETHING
  else
  {

  }

}
//function responsible for taking results of each round and dictating who to take health of, either player or the enemy
function healthBar()
{
    //switch is what element player selects and the if statements and else statements are what enemy selects and inside {} are the results of the battles
    switch (player.play) 
    {
        case "FIRE":
            if (enemy.play =="FIRE")
            {
                player.health = player.health;//basically i dont need anything here but just for showcase of what happens its the same result cuz its a draw
                enemy.health = enemy.health;            
            }
            else if (enemy.play=="AIR")
            {
                enemy.health -= 25;
            }
            else if (enemy.play="WATER")
            {
                player.health -= 25; 
            }
            else     
            {
               player.health -= 25;
            }
            break;
        case "AIR":
            if (enemy.play =="FIRE")
            {
               player.health -= 25;
            }
            else if (enemy.play=="AIR")
            {
            
            }
            else if (enemy.play="WATER")
            {
             
            }
            else 
            {
              enemy.health -=25;
            }
           
            break;
        case "EARTH":
            if (enemy.play =="FIRE")
            {
               enemy.health -=25;
            }
            else if (enemy.play=="AIR")
            {
               player.health -=25;
            }
            else if (enemy.play="WATER")
            {
                player.health -=25;
            }
            else 
            {
                
            }
           
            break;
        case "WATER":
            if (enemy.play =="FIRE")
            {
               enemy.health -=25;
            }
            else if (enemy.play=="AIR")
            {
                    
            } 
            else if (enemy.play="WATER")
            {
      
            }
            else 
            {
                player.health -=25;
            }
           
            break;
       }
//console log is being used just for the testing purposes if it was working       
console.log("player -> " + player.health + " enemy  ->  " + enemy.health);
}
//this function reacts to the previous variable that i have setup and chooses a random number between 1 or 4, basically selecting random element for enemy
function getRandomInt(elementChance) 
{
    return Math.floor(Math.random() * Math.floor(elementChance));
}
//this variable dictates whatever number was selected by getRandomInt function it uses an element sprite to display the number choosen on the screen
function enemyElement()
{
 var randomElement = getRandomInt(elementChance);
        
        if (randomElement == 0) 
        {
            //enemy.fireElement();
            enemy.play ="FIRE";
        }
        if (randomElement == 1) 
        {
            //enemy.airElement();
            enemy.play ="AIR";
        }
        if (randomElement == 2) 
        {
            //enemy.earthElement();
            enemy.play ="EARTH";
        }
        if (randomElement == 3) 
        {
            //enemy.waterElement();
            enemy.play ="WATER";
        }
}

//this function basically restarts the game after player or enemy lose 
function init()
{
     player= new GameObject(false);
     enemy= new GameObject(true);
     elementChance = 4;
     gameEnd = false;
     timerEnd = false;
}

//this function was meant to be used for the timer to dictate how many seconds pass 
//function updateCountdown()
//{
//    //const minutes = Math.floor(time / 60);
//    let seconds = time % 4;
//
//    //seconds = seconds < 10 ? '0' + seconds : seconds;
//
//    countdownEl.innerHTML = seconds;
//    time--;
//    timer = seconds;
//    if (seconds == 0)
//    {
//       timerEnd = true;
//    }
//    timerEnd = false;
//    console.log(seconds);
//    
//}

//function for players health bar 
function drawHealthbar() 
{
    var width = 100;
    var height = 20;
    var max = 100;
    var val = player.health;
  
    // Draw the background
    context.fillStyle = "#000000";
    context.clearRect(365, 330, width, height);
    context.fillRect(365, 330, width, height);
  
    // Draw the fill
    context.fillStyle = "#00FF00";
    var fillVal = Math.min(Math.max(val / max, 0), 1);
    context.fillRect(365, 330, fillVal * width, height);
  }
//function for enemy health bar
  function drawHealthbarEnemy() 
{
    var width = 100;
    var height = 20;
    var max = 100;
    var val = enemy.health;
  
    // Draw the background
    context.fillStyle = "#000000";
    context.clearRect(1410, 330, width, height);
    context.fillRect(1410, 330, width, height);
  
    // Draw the fill
    context.fillStyle = "#00FF00";
    var fillVal = Math.min(Math.max(val / max, 0), 1);
    context.fillRect(1410, 330, fillVal * width, height);
  }

//function responsible for drawing everything that is in the canvas 
function draw()
{
    //the problem with the canvas was that because i set the white colour at the start everything else was drawing in white so i had to add black after the TEXT STYLE
    context.fillStyle = '#fff'; 
    context.fillRect(0, 0, 1900, 850);

    
    switch (player.play) 
    {
        case "FIRE":
        console.log(fire.image);    
        context.drawImage(fire.image,240,100);
            
            break;
        case "AIR":
            context.drawImage(air.image,240,100);
            break;
        case "EARTH":
            context.drawImage(earth.image,240,100);
            break;
        case "WATER":
            context.drawImage(water.image,240,100);
            break;
       }

       switch (enemy.play) 
       {
           case "FIRE":
               context.drawImage(fire.image,1280,100);
               break;
           case "AIR":
               context.drawImage(air.image,1280,100);
               break;
           case "EARTH":
               context.drawImage(earth.image,1280,100);
               break;
           case "WATER":
               context.drawImage(water.image,1280,100);
               break;
          }
          context.font="30px Arial";
          context.fillStyle = '#000'; 
//this displays players and enemies health in numbers
context.fillText(player.health,400,300);
context.fillText(enemy.health,1445,300);

}

function gameLoop()
{
//console log was just for testing purposes to see if the game actually ended and the loop stopped or if the code actually worked
 console.log(gameEnd);
 //all the commented code was suppose to corresspond to timer being implemented into the game, the purpose of it was to remove function of the buttons once the timer hit 0
 //if (timerEnd)
 //{
 //   document.getElementById("FIRE").removeEventListener('click',roundEditor);
 //   document.getElementById("AIR").removeEventListener('click',roundEditor);
 //   document.getElementById("WATER").removeEventListener('click',roundEditor);
 //   document.getElementById("EARTH").removeEventListener('click',roundEditor);
 //}
 //else
 //{
 //   document.getElementById("FIRE").addEventListener('click',roundEditor);
 //   document.getElementById("AIR").addEventListener('click',roundEditor);
 //   document.getElementById("WATER").addEventListener('click',roundEditor);
 //   document.getElementById("EARTH").addEventListener('click',roundEditor);
 //} 
 
 //this if statement turns on when the gameEnd function activates and it makes the game stop working until the player uses the "restart button"
 if (!gameEnd)
  { 
   draw();    
  }
  endGame();
 drawHealthbar();
 drawHealthbarEnemy();
 window.requestAnimationFrame(gameLoop); 
}

window.requestAnimationFrame(gameLoop);
}