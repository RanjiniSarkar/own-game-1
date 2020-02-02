
var bg
var street1_img,street1
var mh_img,mh,rj_img,rj,wb_img,wb
var man,man_img;
var streetRj
var streetMh;
var streetWb
var form
var gameState="play";
var trash_img,trash

var can_img,can;
var paper_img,paper;



function preload(){
  bg = loadImage("images/india map.jpg");
  street1_img = loadImage("images/street1.jpg");
 
mh_img=loadImage("images/maharastra-tourism.jpg");

rj_img=loadImage("images/rajasthan-map.jpg")
wb_img=loadImage("images/wb.jpg");
man_img=loadImage("images/man1.png");
can_img=loadImage("images/can_burned.png")
paper_img=loadImage("images/paper_burned.png")
trash_img=loadImage("images/trash.png")




}

function setup() {
  createCanvas(1600,800);
  //form = new Form()
  //player=createSprite(400, 200, 50, 50);
  //player.addImage("img",player_img);
 
 mh=createSprite(150,450,50,50)
  mh.addImage("mh",mh_img)
  wb=createSprite(400,350,50,50)
  wb.addImage("wb",wb_img)

 streetRj = createSprite(150,300,50,50)
 streetRj.addImage("rj",rj_img)
 streetRj.visible=false

 street1 = createSprite(300,400,600,800);
 street1.addImage("street1",street1_img)
 street1.visible=false
 man = createSprite(100,200);
 man.addImage("man",man_img);
 man.vi

 can=createSprite(1500,700);
 can.addImage("img",can_img);
 can.visible=false;

 paper=createSprite(100,700);
 paper.addImage("img",paper_img);
 paper.visible=false;

 trash=createSprite(800,500);
 trash.addImage("img", trash_img);
 trash.visible=false;




  
  
}
 

function draw() {
  background(bg); 
 
  if (keyDown(UP_ARROW)){
   move(0,-8);
}
if(keyDown(DOWN_ARROW)){
  move(0,8);
}
if(keyDown(LEFT_ARROW)){
  move(-8,0);
}
if(keyDown(RIGHT_ARROW)){
  move(8,0);
}
if(man.x < 200){
  streetRj.visible=true;
}
else{
  streetRj.visible=false;
}

if(man.y < 450){
  mh.visible=true;
}
else{
  mh.visble=false;
}
if(man.x<450){
  wb.visible=true
}
else{
  wb.visible=false;
}
  mh.scale=0.2


  streetRj.scale=0.2

  wb.scale=0.4
  man.scale=1;

 
  if ( mousePressedOver(streetRj)){
    street1.visible=true
    gameState = "play"
    street1.scale=1.5;
    can.visible=true;
    can.scale=0.2;
    paper.visible=true;
    paper.scale=0.1;
    trash.visible=true;
   trash.scale=0.5;
}
if(gameState === "play"){
 man.visible=true;
 man.x=1500
 
console.log("working")


 
 
}


  drawSprites();

}

function move(x,y){
man.x=man.x+x;
man.y=man.y+y;


}


