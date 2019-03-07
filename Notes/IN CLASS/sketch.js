var showingOrHiding = 1;
var showButton;
var hideButton;

function setup() {
  // put setup code here
createCanvas(500,500);

showButton = createButton("show");
showButton.position(30,50);
showButton.mousePressed(function(){
  fill("red");
  ellipse (width/2,height/2,100,100);
  showingOrHiding = 1;

});

hideButton = createButton("hide");
hideButton.position(80,50);
hideButton.mousePressed(function(){
  showingOrHiding = 0;
});

}

function draw() {
background(255);

  // put drawing code here
  if (showingOrHiding == 1){
    fill(0);
    ellipse(mouseX,mouseY,10,10);
  }

  if (showingOrHiding == 0){

  }



}
