let cor;
let verticar;
let horizontal;

function setup() {
  createCanvas(400, 400);
  background("rgb(13,13,236)");
  cor=color(random(0,255),random(0,255),random(0,255));
  
  horizontal=200;
  vertical=200;

}

function draw() {
  circle(horizontal,vertical,35);
  fill(cor);
  
  if(mouseX < horizontal) {
    horizontal--
}
  if(mouseX > horizontal) {
    horizontal++
}
  
  if(mouseY < vertical) {
    vertical--
}
  if(mouseY > vertical) {
    vertical++
}

 if (mouseIsPressed){
 cor=color(random(0,255),random(0,255),random(0,255),random(0,100)); 
   }
}
