
var headStickman = new Array("./IMG/AIR_stickman.png","./IMG/EARTH_stickman.png","./IMG/FIRE_stickman.png","./IMG/WATER_stickman.png");
//enemyElement.src = 
//var randomNum = Math.floor()

//health
function GameObject()
{
    var health = 100;
    var element = "./IMG/EMTPY";
}

var player 

//timer 
const startingMinutes= 10;
let time = startingMinutes * 60;
var timer = 0;
const countdownEl = document.getElementById("countdown");
setInterval(updateCountdown, 1000);

var elementChance = 4;
var headEnemy = 1;
headEnemy.src="/IMG/FIRE_stickman.png";
var enemyStickman = new Image();
enemyStickman.src="./IMG/REGULAR_stickman.png";
var playerStickman = new Image();
 playerStickman.src="./IMG/REGULAR_stickman.png";
 var playerFace = new Image();
 playerFace.src="./IMG/EMPTY_stickman.png";
 var enemyFace = new Image();
 enemyFace.src ="./IMG/FIRE_stickman.png";
 
 var canvas = document.getElementById("game");
 var context = canvas.getContext("2d");
 
 document.getElementById("FIRE").addEventListener("touchstart", fireButtonDown, {passive: true});
 document.getElementById("AIR").addEventListener("touchstart", airButtonDown, {passive: true});
 document.getElementById("WATER").addEventListener("touchstart", waterButtonDown, {passive: true});
 document.getElementById("EARTH").addEventListener("touchstart", earthButtonDown, {passive: true});
 //document.getElementById("IDOFBUTTON").addEventListener("touchend", FUNCTIONNAMEHERE, {passive: true});
 function pageLoaded()
{
    //playerStickman.src="./IMG/REGULAR_stickman.png";
    //playerFace.src="./IMG/EMPTY_stickman.png";
    
            


            //canvas.addEventListener("click",()=>
//{
//console.log("clicked canvas"); 
//});
}

function updateCountdown()
{
    //const minutes = Math.floor(time / 60);
    let seconds = time % 4;

    //seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = seconds;
    time--;
    timer = seconds;
    //console.log("hi");
}


function fireButtonDown()
{
    playerFace.src="./IMG/FIRE_stickman.png";

}

function airButtonDown()
{
    playerFace.src="./IMG/AIR_stickman.png";
}

function waterButtonDown()
{
    playerFace.src="./IMG/WATER_stickman.png";
}

function earthButtonDown()
{
    playerFace.src="./IMG/EARTH_stickman.png";
}

function fireEnemy()
{
    enemyFace.src="./IMG/FIRE_stickman.png";
    
    console.log("fire");
}

function airEnemy()
{
    enemyFace.src="./IMG/AIR_stickman.png";
    
    console.log("air");
}

function waterEnemy()
{
    enemyFace.src="./IMG/WATER_stickman.png";
    
    console.log("water");
}

function earthEnemy()
{
    enemyFace.src="./IMG/EARTH_stickman.png";
    
    console.log("earth");
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
            fireEnemy();
        }
        if (randomElement == 1) 
        {
            airEnemy();
        }
        if (randomElement == 2) 
        {
            waterEnemy();
        }
        if (randomElement == 3) 
        {
            earthEnemy();
        }
        
}

function update()
{

}

// Draw GameObjects to Console
// Modify to Draw to Screen
function draw()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(playerStickman,240,100);
    context.drawImage(enemyStickman,1280,100);
    context.drawImage(playerFace,240,100);
    
    context.drawImage(enemyFace,1280,100);
    
    //context.drawImage(enemyHead,1280,100);
    
    
    //fire element
    //context.beginPath();
    //context.arc(200, 785, 40, 0, 2 * Math.PI);
    //context.lineWidth = 5;
    //context.stroke();
    //context.closePath();
    //air element
    //context.beginPath();
    //context.arc(320, 785, 40, 0, 2 * Math.PI);
    //context.stroke();
    //context.closePath();
    //water element
    //context.beginPath();
    //context.arc(440, 785, 40, 0, 2 * Math.PI);
    //context.stroke();
    //context.closePath();
    
    //earth element
    //context.beginPath();
    //context.arc(560, 785, 40, 0, 2 * Math.PI);
    //context.stroke();
    //context.closePath();
    //player head
    //context.beginPath();
    //context.arc(372, 250, 40, 0, 2 * Math.PI);
    //context.stroke();
    //context.closePath();
    //timer
    context.beginPath();
    context.arc(950, 120, 60, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();
    //enemy head
    //context.beginPath();
    //context.arc(1500, 250, 40, 0, 2 * Math.PI);
    //context.stroke();
    //context.closePath();
    //middle line
    context.beginPath();
    context.moveTo(950, 250);
    context.lineTo(950,900);
    context.stroke();
    //context.lineWidth = 10;
    context.closePath();
   //enemyElement;
    //window.onload = enemyElement;
   context.font="16pt Arial";
   context.strokeText(timer, 50,101);

}

//gameplay loop
function gameloop()
{
    
    update();
    //enemyElement();
    draw();
    window.requestAnimationFrame(gameloop);
}
// Handle Active Browser Tag Animation
window.requestAnimationFrame(gameloop);
