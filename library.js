function keyPressed(){
    if(keyCode === LEFT_ARROW){
      tom1.velocityX=-5;
      jerry1.addAnimation("teasing",jerry_2);
      jerry1.changeAnimation("teasing",jerry_2)
      tom1.addAnimation("walking",tom_2);
      tom1.changeAnimation("walking",tom_2);
      }
    }