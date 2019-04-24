var townMap, horse, flamingo, drongo, schoolbus, frog;
var button1, button2;
var Interfaces;
var horseSound,busSound,flamingoSound,cowSound, frogSound;

var busMove = 200;

var page0,page1,page2,page3;

var currentPage = 0;

function preload(){
 townMap = loadImage('assets/townmap.jpg');
 horse = loadImage('assets/horse.png');
 flamingo = loadImage('assets/flamingo.png');
 schoolbus = loadImage('assets/schoolbus.png');
 cow = loadImage('assets/cow.png');
 frog = loadImage('assets/frog.png');

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
  cowSound.setVolume(0.5);
  cowSound.play();




// tempX, tempY, tempS, tempC,  tempName


}

function draw() {
  // put drawing code here
    background(255);

    if(currentPage == 0){
    fill(221,160,221);
    strokeWeight(10);
    text("Welcome to Sound Town, Enjoys your sound exploration trip!", 200,200);
   }else if(currentPage == 1){
    image(townMap,30,20,townMap.width/3,townMap.height/3);
    image(horse, 100,160,horse.width/12,horse.height/12);
    image(flamingo, 60,110, flamingo.width/10,flamingo.height/10);
    image(cow, 150,370, cow.width/12,cow.height/12);
    image(schoolbus, busMove,330,schoolbus.width/10,schoolbus.height/10);
  }

    if(mouseX > 150 && mouseX < 350){
      busMove = mouseX
    }





}


function mousePressed(){

  if(dist(mouseX,mouseY, 120,160) < 30){
    console.log("horse");
    horseSound.play();
  }else{
    horseSound.stop();
  }

  if(dist(mouseX,mouseY,busMove,330) < 40){
    console.log("schoolbus");
    busSound.play();
  }else{
    busSound.stop();
  }

  if(dist(mouseX,mouseY, 60,110) < 30){
    console.log("flamingo");
    flamingoSound.play();
  }else{
    flamingoSound.stop();
  }

  if(dist(mouseX,mouseY, 150,370) < 30){
    console.log("cow");
    cowSound.play();
  }else{
    cowSound.stop();
  }




  var panning = map(schoolbus,100,300)
  busSound.pan(panning);



  //
  // if(button1.check(mouseX,mouseY)){
  //   //red button
  //   horseSound.play();
  //
  //
  //
  // }

}
