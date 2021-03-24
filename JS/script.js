var enemyStickman = new Image();
enemyStickman.src="./IMG/REGULAR_stickman.png";
var playerStickman = new Image();
 playerStickman.src="./IMG/REGULAR_stickman.png";
 var playerFace = new Image();
 playerFace.src="./IMG/EMPTY_stickman.png";
 
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


function update()
{

}

// Draw GameObjects to Console
// Modify to Draw to Screen
function draw()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(playerStickman,240,100);
    context.drawImage(enemyStickman,1280,100)
    context.drawImage(playerFace,240,100);
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
    context.lineWidth = 10;
    context.closePath();
   

}

//gameplay loop
function gameloop()
{
    update();
    draw();
    window.requestAnimationFrame(gameloop);
}
// Handle Active Browser Tag Animation
window.requestAnimationFrame(gameloop);

