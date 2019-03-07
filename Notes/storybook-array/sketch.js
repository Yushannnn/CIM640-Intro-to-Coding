var page0,page1,page2,page3;
var image1;
var image2;
var image3;
var image0;

var currentImage = 0;

var story = ["There is a dinosaur","And he liked to dance","And a meteor was coming","And it passed","click on the buttons below to read the story"];

var imageArray = [];

function preload(){
  imageArray[0] = loadImage("assets/Thatwasclose0.jpg");
  imageArray[1] = loadImage("assets/Thatwasclose1.jpg");
  imageArray[2] = loadImage("assets/Thatwasclose2.jpg");
  imageArray[3] = loadImage("assets/Thatwasclose3.jpg");
}


function setup(){
  createCanvas(500,500);
  page0 = createButton("page0");
  page0.position(10,100);
  page0.mousePressed(function(){
   currentImage = 0;
  });

  page1 = createButton("page1");
  page1.position(100,100);
  page1.mousePressed(function(){
    currentImage = 1;
  });

  page2 = createButton("page2");
  page2.position(200,100);
  page2.mousePressed(function(){
    currentImage = 2;
  });

  page3 = createButton("page3");
  page3.position(300,100);
  page3.mousePressed(function(){
    currentImage = 3;
  });

}



function draw(){
  background(255);

  image(imageArray[currentImage],0,0);
  text(story[currentImage],10,10);

}
