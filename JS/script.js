function pageLoaded()
{
function GameObject(isAI)
{
    this.stickman= new Image();
    this.stickman.src="./IMG/REGULAR_stickman.png";
    this.face=new Image();
    this.face.src="./IMG/EMPTY_stickman.png";
    this.health= 100;
    this.isAI=isAI;
    this.play="";
    //this.win="";

}

function ImageObject(link)
{
    this.image = new Image();
    this.image.src=link;
}

var fire =new ImageObject("./IMG/FIRE_stickman.png");
var air = new ImageObject("./IMG/AIR_stickman.png");
var water = new ImageObject("./IMG/WATER_stickman.png");
var earth = new ImageObject("./IMG/EARTH_stickman.png");

var player= new GameObject(false);
var enemy= new GameObject(true);

var context = document.getElementById("game").getContext("2d");

var elementChance = 4;

var gameEnd = false;

//timer stuff
const startingMinutes= 10;
let time = startingMinutes * 60;
var timer = 0;
const countdownEl = document.getElementById("countdown");
setInterval(updateCountdown, 1000);
var timerEnd = false;

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

function endGame()
{
  
  if (player.health == 0)
  {
      context.fillText("You Win",500,500);
      gameEnd = true;
      
  }
  else if (enemy.health == 0)
  {
    context.fillText("You Lose",500,500);
    gameEnd = true;
    
  }
  //for else you never have to write a condition, YOU GET AN ERROR IF YOU WRITE SOMETHING
  else
  {

  }

}

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
               enemy.heatlh -=25;
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
console.log("player -> " + player.health + " enemy  ->  " + enemy.health);
}

function getRandomInt(elementChance) 
{
    return Math.floor(Math.random() * Math.floor(elementChance));
}

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

function update()
{
    
}

function updateCountdown()
{
    //const minutes = Math.floor(time / 60);
    let seconds = time % 4;

    //seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = seconds;
    time--;
    timer = seconds;
    if (seconds == 0)
    {
       timerEnd = true;
    }
    timerEnd = false;
    console.log(seconds);
    
}

//GameObject.prototype.draw = function(context)
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
context.fillText(player.health,100,100);
context.fillText(enemy.health,200,200);

}

function gameLoop()
{
 console.log(gameEnd);
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
 
 if (!gameEnd)
  { 
   draw();    
  }
  endGame();
  window.requestAnimationFrame(gameLoop);

}

window.requestAnimationFrame(gameLoop);
}