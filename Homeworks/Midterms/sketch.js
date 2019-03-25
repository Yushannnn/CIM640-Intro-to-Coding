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
var instruction = "Know more about Doraemon?                                       Click the button to start";
var bgColor = "pink";


var button1, button2, button3, button4;
var buttonA, buttonB, buttonC;
var button4,button5,button6;

var page0, page1, page2, page3, page4;
var currentPage = 1;
var pageArray = [];

var questions = ["Who is Doraemon's best friend?","which can help Doraemon to fly?"];

var currentQuestion = 0;
var currentOption = -1;
var answerCorrect = " ";
var answer = 1;
var answers = 3;

var dorami, giant, shizuka, nobita, cloud, copter, airplane, bird, doraemonfly, nobitafly;

var cloud
var cloudLocationX = [];
var cloudLocationY = [];
var cloudAmount = 4;

var airplaneLocationX = [];
var airplaneLocationY = [];
var airplaneAmount = 4;

var birdLocationX = [];
var birdLocationY = [];
var birdAmount = 6;

var airplaneStart = false;
var birdStart = false;

var buildingLocationX = [];
var buildingLocationY = [];
var buildingAmount = 1;

function preload (){
  dorami = loadImage("assets/dorami.png");
  nobita =loadImage("assets/nobita.png");
  giant = loadImage("assets/Giant.png");

  cloud = loadImage("assets/cloud.png");
  copter = loadImage("assets/copter.png");
  airplane = loadImage("assets/airplane.png");
  bird = loadImage("assets/bird.png");

  doraemonfly = loadImage("assets/doraemonfly.png");
  nobitafly = loadImage("assets/nobitafly.png");
  building = loadImage("assets/building.png");
}

function setup() {
  // put setup code here
  createCanvas(600,500);

  button1 = createButton("Page 1");
  button1.position(500,100);
  button1.mousePressed(function(){
    currentPage =1;
    currentOption = -1;

  });

  button2 = createButton("Page 2");
  button2.position(500,150);
  button2.mousePressed(function(){
    currentPage = 2;
    currentOption = -1;

  });

  button3 = createButton("Page 3");
  button3.position(500,200);
  button3.mousePressed(function(){
    currentPage = 3;
    currentOption = -1;

  });

  buttonA= createButton("A:Giant");
  buttonA.position(50,100);
  buttonA.mousePressed(function(){
    currentOption =0;
  });

  buttonB= createButton("B:Nobita");
  buttonB.position(180,100);
  buttonB.mousePressed(function(){
    currentOption =1;
  });

  buttonC= createButton("C:Dorami");
  buttonC.position(320,100);
  buttonC.mousePressed(function(){
    currentOption =2;
  });

  button4= createButton("A:Bamboo Copter");
  button4.position(20,150);
  button4.mousePressed(function(){
    currentOption =3;
    });

  button5= createButton("B:Airplane");
  button5.position(190,150);
  button5.mousePressed(function(){
    currentOption =4;
    });

  button6= createButton("C:Bird");
  button6.position(350,150);
  button6.mousePressed(function(){
    currentOption =5;
    });

    reset= createButton("Restart");
    reset.position(500,400);
    reset.mousePressed(function(){
      currentPage =1;
      });


    button1.show();
    button2.show();
    button3.show();
    buttonA.hide();
    buttonB.hide();
    buttonC.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    reset.hide();


    for(var l = 0; l < cloudAmount; l++){
      cloudLocationX[l] = random(0,width);
      cloudLocationY[l] = random(-1000, 0);
    }

    for(var i = 0; i < airplaneAmount; i++){
      airplaneLocationX[i] = random(0, -500);
      airplaneLocationY[i] = random(0, height/3);
    }

    for(var x = 0; x < birdAmount; x++){
      birdLocationX[x] = random(0, width/3);
      birdLocationY[x] = random(0, 500);
    }

    for(var y = 0; y < buildingAmount; y++){
      buildingLocationX[y] = random(0,width/3);
      buildingLocationY[y] = random(50,700);
    }

}


function draw() {
  background(255);
  //instruction
  if(currentPage == 1){
    button1.hide();
    button2.show();
    button3.show();
    buttonA.hide();
    buttonB.hide();
    buttonC.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    reset.hide();

    strokeWeight(5);
    background(bgColor);
    stroke(0);
    textSize(15);
    text(instruction,15,20);

    // put drawing code here
    strokeWeight(5);
    stroke(outline);

    //apple

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



//

  //question


  }else if(currentPage == 2){
background(170, 152, 180);

    button1.show();
    button2.hide();
    button3.show();
    buttonA.show();
    buttonB.show();
    buttonC.show();
    button4.hide();
    button5.hide();
    button6.hide();

strokeWeight(0);
textSize(20);
text(questions[currentQuestion],30,60);

image(dorami,310,160,dorami.width/9, dorami.height/9);
image(nobita,150,150,nobita.width/3,nobita.height/3);
image(giant,10,150,giant.width/4.5,giant.height/4.5);

  console.log(currentOption);

textSize(10);
if(currentOption != -1){
  if(currentOption == answer){
  console.log("correct")
   answerCorrect = "Good Job!";
   text(answerCorrect,350,80);
   currentQuestion = currentQuestion +1;
   currentPage = currentPage + 1;
   currentOption = -1;

  }else{
    console.log("wrong");
    answerWorng= "Try Again";
    text(answerWorng,350,80);
  }
}


}else if(currentPage == 3){
  background(143, 188, 222);

    button1.show();
    button2.show();
    button3.hide();
    buttonA.hide();
    buttonB.hide();
    buttonC.hide();
    button4.show();
    button5.show();
    button6.show();

  strokeWeight(0);
  textSize(20);
  text(questions[currentQuestion],30,60);

  image(copter, 20,200, copter.width/5,copter.height/5);
  image(airplane,165,200,airplane.width/6, copter.height/6);
  image(bird,320,180,bird.width/10,bird.height/10);

textSize(10);
if(currentOption != -1){
  if(currentOption == answers){
  console.log("correct")
  answerCorrect = "Good Job!";
   text(answerCorrect,350,80);
   currentPage = currentPage + 1;
   currentOption = -1;

  }else{
    console.log("wrong");
    answerWorng= "Try Again";
    text(answerWorng,350,80);
  }
}


}else if(currentPage == 4){
  background(109, 164, 208);

  button1.hide();
  button2.hide();
  button3.hide();
  buttonA.hide();
  buttonB.hide();
  buttonC.hide();
  button4.hide();
  button5.hide();
  button6.hide();
  reset.show();

  for(var y = 0; y < buildingAmount; y++){
  image(building,buildingLocationX[y],buildingLocationY[y],building.width/2.5,building.height/2.5);

  buildingLocationY[y] = buildingLocationY[y] + 1
  if(buildingLocationY[y] > height/2){
   buildingLocationX[y] = (0,width/3);
   buildingLocationY[y] = (50, 700);
  }

  if (buildingLocationX[y] > width/3){
    birdStart = true
  }
  if(birdStart == true){
  //bird code here
  for(var x = 0; x < birdAmount; x++){
   image(bird, birdLocationX[x], birdLocationY[x],bird.width/10,bird.height/10)
   birdLocationX[x] = birdLocationX[x] + 1
  if(birdLocationX[x] > width ){
    birdLocationX[x] = random(0, 600);
    birdLocationY[x] = random(0, height/3);

  if(buildingLocationY[y] > heigh){
      airplaneStart = true;
    }
  }
  }
  }


    for(var i = 0; i < airplaneAmount; i++){
    image(airplane, airplaneLocationX[i], airplaneLocationY[i], airplane.width/12, airplane.height/12);
      airplaneLocationX[i] = airplaneLocationX[i] + 1
    if(airplaneLocationX[i] > width ){
      airplaneLocationX[i] = random(0, height/3);
      airplaneLocationY[i] = random(0, -500);
    }
   }


  for(var l = 0; l < cloudAmount; l++){
  image(cloud,cloudLocationX[l],cloudLocationY[l],cloud.width/12,cloud.height/12);

  cloudLocationY[l] = cloudLocationY[l] + 1
  if(cloudLocationY[l] > height ){
   cloudLocationX[l] = random(-1000, 0);
   cloudLocationY[l] = random(0, width);
  }
}

  //if(airplaneLocationX[i] > width/2 ){
   //birdStart = true;
//  }

image(doraemonfly,280,30,doraemonfly.width/7, doraemonfly.height/7);
image(nobitafly, 100,150, nobitafly.width/5, nobitafly.height/5);

}
}
}
