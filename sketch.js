function setup() {
  createCanvas(400, 400);
}
let olhosY
let olhosX

function draw() {
  background("orange");
  fill("#FFEB3B")
   circle(200,200,300)  // rosto
  fill("white")
  circle(150,150,60)  // olho esquerdo
  circle(250,150,60)  // olho direito
  line(150,270,250,235)  // boca
  fill("rgb(27,18,18)")
  triangle(200,180,170,220,220,220)  // nariz
  line(123,115,178,113)  // sobracelha esquerda
  line(225,116,279,106)  // sobracelha direita
  // circle(150,150,10)  // pupila esquerda
  // circle(250,150,10)  // pupila direita
  
  olhoX = map(mouseX,0,400,130,170)
  olhoY = map(mouseY,0,400,130,170)
    
  circle(olhoX,olhoY,10)
  circle(olhoX+100,olhoY,10)
  if(mouseIsPressed)
    console.log(mouseX,mouseY)
  
}
