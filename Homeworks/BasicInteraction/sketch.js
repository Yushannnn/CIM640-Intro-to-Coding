//var currentWidth = width; will not work outside of p5 functions
//var currentHeight = height;

//Global variables are available everywhere


//Global Variables
var main = "blue";
var part = "white";
var prop = "red";
var outline = "black";
var mustacheX = 190;
var mustcheY = 110;

var handPosX = 90;
var handPosY = 200;
var handSize = 65;

var instruction = "Don't touch the apple!";

var bgColor = "pink";


function setup() {
  // put setup code here
  createCanvas(600,500);
}


function draw() {

  //background
  strokeWeight(5);
  background(bgColor);
  text(instruction,20,30);

  // put drawing code here
  strokeWeight(5);
  stroke(outline);

  //apple
  fill("red");
  stroke("red");
  ellipse(500,350,55,50);

  stroke(0);
  angleMode(DEGREES);
  arc(495,325,20,20,40,140);
  arc(510,330,30,30,160,250);

  //feet
  ellipse(320,420,100,50);
  ellipse(190,420,100,50);

  strokeWeight(40);
  stroke(main);
  //arms
  line(90,200,190,300);
  line(mouseX,mouseY,300,275);

  fill(part);
  strokeWeight(5);
  stroke(outline);
  //hands
  ellipse(handPosX,handPosY,handSize,handSize);
  ellipse(mouseX,mouseY,65,65);

  fill(main);
  //body
  rect(160,200,180,210,30);

  fill(part);
  //pocket
  ellipse(250,320,150,120);
  angleMode(DEGREES);
  arc(250,320,110,90,0,180);
  line(195,320,305,320);

  //face
  fill(main);
  ellipse(250,150,250,250);
  fill(part);
  ellipse(250,175,200,190);

  //eyes
  ellipse(220,60,55,65);
  ellipse(280,60,55,65);

  strokeWeight(5);
  fill(prop);
  //nose
  ellipse(250,95,30,30);

  //necklace
  fill(prop);
  rect(175,250,150,20,10);
  fill("yellow");
  ellipse(250,270,30,30);
  line(240,265,260,265);

  fill(part);
  //mustache
  angleMode(DEGREES);
  arc(170,140,55,60,65,310);
  arc(330,140,55,60,-120,120);
  line(mustacheX,mustcheY,mustacheX+50,mustcheY+10);
  line(mustacheX-10,mustcheY+20,mustacheX+50,mustcheY+25);
  line(mustacheX-15,mustcheY+45,mustacheX+50,mustcheY+35);
  line(mustacheX+70,mustcheY+10,mustacheX+120,mustcheY);
  line(mustacheX+70,mustcheY+25,mustacheX+130,mustcheY+20);
  line(mustacheX+70,mustcheY+35,mustacheX+130,mustcheY+45);

  if(mouseX > 500, mouseY > 350){
    //run this code
    console.log("got poision");


  }

  if(mouseX < 490, mouseY < 340){
    //run this Code
    console.log("you're fine");
  }

  if(mouseX > 450, mouseY > 300){
    //eyes
    strokeWeight(10);
    ellipse(235,50,10,20);
    ellipse(265,70,10,20);
    //mouse
    strokeWeight(5);
    angleMode(DEGREES);
    arc(250,230,130,110,180,0);
    line(250,110,250,170);
  }

  if(mouseX < 450, mouseY < 300){
    //eyes
    strokeWeight(10);
    ellipse(230,65,10,20);
    ellipse(270,65,10,20);
    //mouse
    strokeWeight(5);
    angleMode(DEGREES);
    arc(250,130,150,220,45,135);
    line(185,190,315,190);
    line(250,110,250,190);
  }

}
//end of the draw loop

function mousePressed(){
bgColor = "black";
}

function keyPressed(){
  console.log("letter: "+ key + "keycode: "+ keyCode)
  if(key == "a"){
    console.log("the letter is a");
    }
  else if (key == "r"){
    bgColor = "red";
  }
  else if (key == "g"){
    bgColor = "green";
  }
}




//end of the Code
