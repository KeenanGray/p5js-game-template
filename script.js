var player
function setup() {
  createCanvas(windowWidth-100, windowHeight-100);
  
  player = createSprite(width/2,height/2,50,50)
  player.shapeColor = color(0,255,0)
}
function draw() {
  background(0);

  //input
    if(keyIsDown(39))
    player.position.x++
  if(keyIsDown(37))
    player.position.x--

  drawSprites()
}

function keyPressed(){
  print(keyCode)
}