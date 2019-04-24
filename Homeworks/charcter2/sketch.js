//Global Variables
var main = "blue";
var part = "white";
var prop = "red";
var mustacheX = 190;
var mustcheY = 110;


function setup() {
  // put setup code here
  createCanvas(500,500);
  background("grey");

}

function draw() {
  // put drawing code here
  strokeWeight(5);

  //feet
  ellipse(320,420,100,50);
  ellipse(190,420,100,50);

  strokeWeight(40);
  //arms
  line(90,200,190,300);
  line(400,300,300,250);

  strokeWeight(5);
  //hands
  ellipse(90,200,65,65);
  ellipse(420,310,65,65);


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

  strokeWeight(10);
  //eye pupils
  ellipse(230,65,10,20);
  ellipse(270,65,10,20);

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
  //mouse
  angleMode(DEGREES);
  arc(250,130,150,210,30,150);
  line(180,170,320,170);
  line(250,110,250,170);

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





}
