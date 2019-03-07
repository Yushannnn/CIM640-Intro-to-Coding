/* "Up-Close Sloth" by marissa_strniste, "Baby sloth, being cute" by Dave Gingrich is licensed under CC BY-SA 2.0. To view a copy of this license, visit: https://creativecommons.org/licenses/by-sa/2.0*/

var currentImage = 1;

var oneButton;
var twoButton;
var threeButton;
var fourButton;

var catOne;
var catTwo;
var catThree;
var catFour;

function preload(){
 catOne = loadImage("assets/catone.jpg");
 catTwo = loadImage("assets/cattwo.jpg");
 catThree = loadImage("assets/catthree.jpg");
 catFour = loadImage("assets/catfour.jpg");

}

function setup() {
  // put setup code here
 createCanvas(500,500);
 background("pink");

 oneButton = createButton("Page one");
 oneButton.position(60,50);
 oneButton.mousePressed(function(){
   currentImage = 0;
 });

 twoButton = createButton("Page two");
 twoButton.position(150,50);
 twoButton.mousePressed(function(){
   currentImage = 1;
});

 threeButton = createButton("Page three");
 threeButton.position(240,50);
 threeButton.mousePressed(function(){
   currentImage = 2;
 });


 fourButton = createButton("Page four");
 fourButton.position(330,50);
 fourButton.mousePressed(function(){
   currentImage = 3;
 });

}

function draw() {
  // put drawing code here
  if (currentImage == 0){
    image(catOne,60,100,catOne.width/1.5,catOne.height/1.5);
}else if(currentImage == 1){
  image(catTwo,60,100,catTwo.width/1.5,catTwo.height/1.5);
}else if(currentImage == 2){
  image(catThree,60,100,catThree.width/1.5,catThree.height/1.5);
}else if(currentImage == 3){
  image(catFour,60,100,catFour.width/1.5,catFour.height/1.5);

  }


}
