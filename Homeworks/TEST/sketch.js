//var currentWidth = width; will not work outside of p5 functions
//var currentHeight = height;

//Global variables are available everywhere
var backgroundColor = "white";
var eyePosX = 0;
var eyePosY = 0;
var eyeOffset = 20;
var eyeSize = 20;
var instruction = "Don't cross the line!";

function setup() {
  // put setup code here
}
createCanvas(500,500);



function draw() {
  // put drawing code here
  background(backgroundColor);
  text(instruction,20,20);

}





function keyPressed(){
  console.log("letter: "+ key + "keycode: "+ keyCode)
  if(key == "a"){
    console.log("the letter is a");

  if(keyCode == "r"){
    background(prop);
  }

function keyCode(){










  function keyPressed(){
    console.log("letter: "+ key + "keycode: "+ keyCode)
    if(key == "a"){
      console.log("the letter is a");
      }
    else if (key == "r"){
      backgroundColor = "red";
    }else if(key === "p"){
      backgroundColor = "pink";
    }
  }
