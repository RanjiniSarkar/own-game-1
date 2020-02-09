
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
 
 mh=createSprite(450,450,50,50)
  mh.addImage("mh",mh_img)
  wb=createSprite(1100,350,50,50)
  wb.addImage("wb",wb_img)

 streetRj = createSprite(450,300,50,50)
 streetRj.addImage("rj",rj_img)
 streetRj.visible=true

 street1 = createSprite(300,400,600,800);
 street1.addImage("street1",street1_img)
 street1.visible=false
 man = createSprite(1500,500);
 man.addImage("man",man_img);
 man.visible = false;

 can=createSprite(1300,700);
 can.addImage("img",can_img);
 can.visible=false;

 paper=createSprite(100,700);
 paper.addImage("img",paper_img);
 paper.visible=false;

 trash=createSprite(800,500);
 trash.addImage("img", trash_img);
 trash.visible=false;




  
  
}
 

function move(x,y){
  man.x=man.x+x;
  man.y=man.y+y;
  
  
  }
function draw() {
  background(bg); 
 
 
  mh.scale=0.2


  streetRj.scale=0.2

  wb.scale=0.4
  man.scale=1;

 
  if ( mousePressedOver(streetRj)){
    street1.visible=true
    man.visible=true
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

// man.x=1550
 //man.y=500;
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
console.log("working")
man.depth=trash.depth;
man.depth=man.depth+1
}
if(man.isTouching(can)){
  can.visible=false
  man.x=800;
  man.y=500;
}




  drawSprites();

}
function isTouching(){
  if(man.x-can.x < man.width/2+can.width/2
   && can.x-man.x < man.width/2+can.width/2
   && man.y-can.y < man.height/2+can.height/2
   && can.y-man.y < man.height/2+can.height/2){


  }
}


