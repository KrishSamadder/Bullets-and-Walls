//creating the variables
var bullet, wall;
var speed, weight, thickness;
var damage;

//creating the function setup
function setup() {
  //creating the canvas
  createCanvas(1600,400);
  //setting speed, weight and thickness to random values
  speed=random(223, 321);
  weight=random(30, 52);
  thickness=random(22, 83);
    //creating the bullet
    bullet=createSprite(50, 200, 15, 5);
    //adding a velocity to the bullet
    bullet.velocityX=speed;
    //adding a color to the bullet
    bullet.shapeColor=(250, 250, 250)
    //creating the wall
    wall=createSprite(1200, 200, thickness, height/2);
    //adding a color to the wall
    wall.shapeColor=(80, 80, 80);
}

//creating the function draw
function draw() {
  //giving a background colour
  background(0, 0, 0);  
  //detecting the collision between the bullet and the wall
  if(wall.x-bullet.x < wall.width/2 + bullet.width/2){
//stopping the bullet
bullet.velocityX=0;
//creating a variable damage
var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness)
//when collision happens, based on deformaation determining the color as red
if(damage>10){
  bullet.shapeColor=color(255, 0, 0);
}

//when collision happens, based on deformaation determining the color as green
if(damage<10){
  bullet.shapeColor=color(0, 255, 0);
}
  }

  //making the sprites visible
  drawSprites();
}
