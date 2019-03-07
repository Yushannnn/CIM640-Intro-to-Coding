var seasons;
var seasonType = "";

var snowLocationX = [];
var snowLocationY = [];
var snowAmount = 100;

var leaf;

var leafLocationX = [];
var leafLocationY = [];
var leafAmount = 20

function preload(){
  leaf=loadImage("https://openclipart.org/download/86959/feuille-leaf-07.svg");
}

function setup() {
  // put setup code here
createCanvas(400,400);


seasons = createSelect();
seasons.position(10,10);
seasons.option("");
seasons.option("spring");
seasons.option("summer");
seasons.option("fall");
seasons.option("winter");

seasons.changed(function(){
  seasonType = seasons.value();
});
}


for(var i=0; i<snowAmount; i++){
  snowLocationX[i] = random(0, width);
  snowLocationY[i] = random(0, -500);
};

for(var l=0; l < leafAmount; l++){
  leafLocationX = random(0,width);
  leafLocationY = random(0,-500);
}

function draw() {
  // put drawing code here
  background(255);
  fill("black");
  stroke(0);
  textSize(20);
  text(seasonType,10,75);

if(seasonType == "spring"){
  line(width/2,height/2,width/2,300);
  fill("white");
  //ellipse(width/2,height/2-20,10,20);
    //i++ is the same as i = i+1;
  for(var i = 0; i < 18; i++){
  //run code in here
  push();
  translate(width/2,height/2);
  rotate(i+30);
  ellipse(0,20,10,20);
  pop();
  }


 fill("yellow");
 ellipse(width/2,height/2,20,20);
}else if(seasonType == "winter"){
  for(var i=0; i < snowAmount; i++){
    fill(200);
    ellipse(snowLocationX[i],snowLocationY[i],10,10);
    snowLocationY[i]= snowLocationY[i] + 1;
    if(snowLocationY[i] > height){
      snowLocationY[i] = random(0,-500);
      snowLocationX[i] = random(0,width);
    }
  }
}else if (seasonType == "fall"){
  for(var l = 0; l < leafAmount; l++){
   image(leaf, leafLocationX[l],leafLocationY[l],leaf.width/4, leaf.height/4);
//swing leaf
   if(leafLocationY[l] < height-20){
     leafLocationY[l]++;
     leafLocationX[l] = leafLocationX[l] + sin(radians(frameCount));
   }

  }
}

}
