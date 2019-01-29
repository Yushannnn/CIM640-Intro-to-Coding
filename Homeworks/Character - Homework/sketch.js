//Global Variables
var legX = 130;
var legY = 210;
var main = "pink";
var eyeY = 125;
var teethX = 250;



function setup() {
  // put setup code here
  createCanvas(500,500);
  background(50,55,100);
}

function draw() {
  strokeWeight(5);

  //console.log(main);
  fill(main);

  //console.log(legX);
  ellipse(legX,legY,100,20);
  ellipse(legX+5,legY+20,100,20);
  ellipse(legX+10,legY+40,100,20);
  ellipse(legX+15,legY+60,100,20);

  //right legs
  ellipse(legX+255,legY,100,20);
  ellipse(legX+250,legY+20,100,20);
  ellipse(legX+245,legY+40,100,20);
  ellipse(legX+240,legY+60,100,20);


  //crab body
  ellipse(250,230,200,200);

  //left eyes
  ellipse(210,eyeY,60,60);

  //left pupil
  ellipse(220,eyeY-10,10,10);

  //right eyes
  ellipse(290,eyeY,60,60);

  //right pupil
  ellipse(280,eyeY-10,10,10);

  //nose
  ellipse(250,200,5,5);

  //mouth
  angleMode(DEGREES);
  arc(250,220,150,150,25,155);
  line(180,250,320,250);

  //front legs
  rect(100,150,80,20,10);
  rect(320,150,80,20,10);

  fill(255,77,77);
  //left craw
  angleMode(DEGREES);
  arc(110,140,60,60,-70,180);
  arc(400,140,60,60,0,250);


  strokeWeight(2);
  //teeth
  line(200,270,300,270);
  line(teethX-30,250,teethX-30,290);
  line(teethX,250,teethX,290);
  line(teethX+30,250,teethX+30,290);











  // put drawing code here
}
