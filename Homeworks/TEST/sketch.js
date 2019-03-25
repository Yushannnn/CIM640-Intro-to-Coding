
  //if(airplaneLocationX[i] > width/2 ){
   //birdStart = true;
//  }



//if(birdStart == true){
//bird code here
for(var x = 0; x < birdAmount; x++){
 image(bird,birdLocationX[x], birdLocationY[x],180,bird.width/10,bird.height/10)
 birdLocationY[x] = birdLocationY[x] + 1
 if(birdLocationY[x] > height ){
  birdLocationY[x] = random(0, width/3);
  birdLocationX[x] = random(0, -500);

  if(birdLocationY[x] > height/2){
    airplaneStart = true;
  }
}
}


if(airplaneStart == true){
  for(var i = 0; i < airplaneAmount; i++){
  image(airplane, airplaneLocationX[i], airplaneLocationY[i], airplane.width/12, airplane.height/12);
    airplaneLocationX[i] = airplaneLocationX[i] + 1
  if(airplaneLocationX[i] > width ){
    airplaneLocationY[i] = random(0, -500);
    airplaneLocationX[i] = random(0, height/3);
  }
 }
}










if(birdStart == true){
//bird code here
for(var x = 0; x < birdAmount; x++){
 image(bird,birdLocationX[x], birdLocationY[x],180,bird.width/10,bird.height/10)
 birdLocationY[x] = birdLocationY[x] + 1
 if(birdLocationY[x] > height ){
  birdLocationY[x] = random(0, width/3);
  birdLocationX[x] = random(0, -500);

  if(birdLocationY[x] > height/2){
    airplaneStart = true;
  }
}
}
}


if(airplaneStart == true){
  for(var i = 0; i < airplaneAmount; i++){
  image(airplane, airplaneLocationX[i], airplaneLocationY[i], airplane.width/12, airplane.height/12);
    airplaneLocationX[i] = airplaneLocationX[i] + 1
  if(airplaneLocationX[i] > width ){
    airplaneLocationY[i] = random(0, -500);
    airplaneLocationX[i] = random(0, height/3);
  }
 }
}
