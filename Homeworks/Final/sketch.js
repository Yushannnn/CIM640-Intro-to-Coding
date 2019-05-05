var townMap, horse, flamingo, drongo, schoolbus, frog, street, farm, birdfly,farmap,
    cat, dog, kid, rain, school;
var button1, button2;
//var Interfaces;
var horseSound,busSound,flamingoSound,cowSound, frogSound;

var busMove = 200;

var kidMove = 200;

var farmButton, streetButton, backButton;

var page0,page1,page2,page3,page4;

var currentPage = 0;

function preload(){
 townMap = loadImage('assets/townmap.jpg');
 horse = loadImage('assets/horse.png');
 flamingo = loadImage('assets/flamingo.png');
 schoolbus = loadImage('assets/schoolbus.png');
 cow = loadImage('assets/cow.png');
 frog = loadImage('assets/frog.png');
 street = loadImage('assets/street.png');
 farm = loadImage('assets/farm.png');
 farmap = loadImage('assets/farmap.png');
 birdfly = loadImage('assets/birdfly.png');
 kid = loadImage('assets/kid.png');
 dog = loadImage('assets/dog.png');
 cat = loadImage('assets/cat.png');
 rain  = loadImage('assets/rain.png');
 school = loadImage('assets/school.png');

 horseSound = loadSound('assets/horse.mp3');
 busSound = loadSound('assets/bus.mp3');
 flamingoSound = loadSound('assets/flamingo.mp3');
 cowSound = loadSound('assets/cow.mp3');
 frogSound = loadSound('assets/frog.mp3');
}

function setup() {
  // put setup code here
  var cnv = createCanvas(500,500);
  cnv.id("mycanvas");
  horseSound.setVolume(0.3);
  horseSound.play();
  busSound.setVolume(0.3);
  busSound.play();
  flamingoSound.setVolume(0.5);
  flamingoSound.play();
  cowSound.setVolume(0.8);
  cowSound.play();



  farmButton = createButton("Go to Farm");
  farmButton.position(90,370);
  farmButton.mousePressed(function(){
    currentPage = 1;
  });

  streetButton = createButton("To See Street");
  streetButton.position(300,370);
  streetButton.mousePressed(function(){
    currentPage = 2;
  });

  backButton = createButton("Back to Entry");
  backButton.position(400,500);
  backButton.mousePressed(function(){
    currentPage = 0;
  });


// tempX, tempY, tempS, tempC,  tempName


}

function draw() {
  // put drawing code here
    background(173,216,230);

    if(currentPage == 0){
    farmButton.show();
    streetButton.show();
    backButton.hide();

    fill(221,160,221);
    stroke(10);
    textSize(40);
    text("Welcome to Sound Town ",40,130);
    textSize(20);
    text("Enjoys your sound exploration trip!",80,180)
    image(street,260,250,street.width/4,street. height/4);
    image(farm,70,240,farm.width/3,farm. height/3);

   }else if(currentPage == 1){
    //image(townMap,30,20,townMap.width/3,townMap.height/3);
    farmButton.hide();
    streetButton.hide();
    backButton.show();

    image(farmap,-220,-10,farmap.width*1.5,farmap.height*1.5);
    image(horse, 300,200,horse.width/10,horse.height/10);
    image(flamingo, 50,350, flamingo.width/8,flamingo.height/8);
    image(cow, 150,370, cow.width/12,cow.height/12);
    image(birdfly, mouseX,40, birdfly.width/9,birdfly.height/9);

  }else if(currentPage == 2){
    farmButton.hide();
    streetButton.hide();
    backButton.show();
    image(townMap,0,0,townMap.width/2.3,townMap.height/2.3);
    image(schoolbus, busMove,300,schoolbus.width/10,schoolbus.height/10);
    image(kid,160,kidMove,kid.width/8,kid.height/8);
    image(school, 80,260,school.width/20,school.height/20);

  }

    if(mouseX > 150 && mouseX < 450){
      busMove = mouseX;
    }

  if(mouseY > 150 && mouseY < 200){
      kidMove = mouseY;
    }

  }

function mousePressed(){
  if(currentPage== 1){
      if(dist(mouseX,mouseY,300,200) < 15){
      console.log("horse");
      horseSound.play();
    }else{
      horseSound.stop();
    }

      if(dist(mouseX,mouseY,150,370) < 15){
      console.log("cow");
      cowSound.play();
    }else{
      cowSound.stop();
    }

    if(dist(mouseX,mouseY, 50,350) < 15){
      console.log("flamingo");
      flamingoSound.play();
    }else{
      flamingoSound.stop();
    }


  }else if(currentPage == 2){
    if(dist(mouseX,mouseY,busMove,370) < 15){
      console.log("schoolbus");
      busSound.play();
    }else{
      busSound.stop();
    }


  if(dist(mouseX,mouseY, 150,370) < 30){
    console.log("kid");
    kidSound.play();
  }else{
    kidSound.stop();
  }

  }


}







  //var panning = map(schoolbus,100,300)
//  busSound.pan(panning);



  //
  // if(button1.check(mouseX,mouseY)){
  //   //red button
  //   horseSound.play();
  //
  //
  //
  // }
